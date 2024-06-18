using Extreme.Mathematics;
using Extreme.Mathematics.Optimization;
using NCalc;

namespace SolutionRecipeCalculation;

internal class Controller
{
    public double filtrationValue = 0.0;
    public double spreadabilityValue = 0.0;
    public double viscosityValue = 0.0;
    
    public async Task<LeastSquaresOptimizer> FindSolutionAsync()
    {
        var solutionAsync = await Task.Run<LeastSquaresOptimizer>((Func<LeastSquaresOptimizer>) (() => this.FindSolution()));
        return solutionAsync;
    }

    private LeastSquaresOptimizer FindSolution()
    {
        var solution = (LeastSquaresOptimizer) new TrustRegionReflectiveOptimizer();
        solution.ObjectiveFunction = new Func<Vector<double>, Vector<double>, Vector<double>>(this.ObjectiveFunction);
        solution.JacobianFunction = new Func<Vector<double>, Matrix<double>, Matrix<double>>(this.JacobianFunction);
        solution.InitialGuess = (Vector<double>) Vector.Create<double>(0.0001, 0.0001);
        solution.LowerBounds = (Vector<double>) Vector.Create<double>(1E-05, 1E-05);
        solution.UpperBounds = (Vector<double>) Vector.Create<double>(2.0, 2.0);
        solution.FindMinimum();
        return solution;
    }
    
    private Vector<double> ObjectiveFunction(Vector<double> x, Vector<double> f)
    {
        if (f == (Vector<double>) null)
            f = (Vector<double>) Vector.Create<double>(3);
        
        if (this.filtrationValue <= 80.0)
            FiltrationModel.GetModel1(this.filtrationValue, ref x, ref f);
        if (this.filtrationValue is > 80.0 and <= 380.0)
            FiltrationModel.GetModel2(this.filtrationValue, ref x, ref f);
        if (this.filtrationValue > 380.0)
            FiltrationModel.GetModel3(this.filtrationValue, ref x, ref f);
        
        if (this.spreadabilityValue <= 240.0)
            SpreadabilityModel.GetModel1(this.spreadabilityValue, ref x, ref f);
        if (this.spreadabilityValue is > 240.0 and <= 350.0)
            SpreadabilityModel.GetModel2(this.spreadabilityValue, ref x, ref f);
        if (this.spreadabilityValue > 350.0)
            SpreadabilityModel.GetModel3(this.spreadabilityValue, ref x, ref f);
        
        if (this.viscosityValue <= 240.0)
            ViscosityModel.GetModel1(this.viscosityValue, ref x, ref f);
        if (this.viscosityValue > 240.0)
            ViscosityModel.GetModel2(this.viscosityValue, ref x, ref f);
        return f;
    }
    
    private Matrix<double> JacobianFunction(Vector<double> x, Matrix<double> J)
    {
        if (J == (Matrix<double>) null)
            J = (Matrix<double>) Matrix.Create<double>(3, 2);
        
        if (this.filtrationValue <= 80.0)
            FiltrationModel.GetJacobian1(ref x, ref J);
        if (this.filtrationValue is > 80.0 and <= 380.0)
            FiltrationModel.GetJacobian2(ref x, ref J);
        if (this.filtrationValue > 380.0)
            FiltrationModel.GetJacobian3(ref x, ref J);
        
        if (this.spreadabilityValue <= 240.0)
            SpreadabilityModel.GetJacobian1(ref x, ref J);
        if (this.spreadabilityValue is > 240.0 and <= 350.0)
            SpreadabilityModel.GetJacobian2(ref x, ref J);
        if (this.spreadabilityValue > 350.0)
            SpreadabilityModel.GetJacobian3(ref x, ref J);
        
        if (this.viscosityValue <= 240.0)
            ViscosityModel.GetJacobian1(ref x, ref J);
        if (this.viscosityValue > 240.0)
            ViscosityModel.GetJacobian2(ref x, ref J);
        return J;
    }
    
    public List<double> SubstituteValue(double x, double y)
    {
      List<double> doubleList = new List<double>();
      
      if (this.filtrationValue <= 80.0)
        doubleList.Add(Convert.ToDouble(new Expression(FiltrationModel.Model1)
        {
          Parameters = {
            ["x"] = ((object) x),
            ["y"] = ((object) y)
          }
        }.Evaluate()));
      if (this.filtrationValue is > 80.0 and <= 380.0)
        doubleList.Add(Convert.ToDouble(new Expression(FiltrationModel.Model2)
        {
          Parameters = {
            ["x"] = ((object) x),
            ["y"] = ((object) y)
          }
        }.Evaluate()));
      if (this.filtrationValue > 380.0)
        doubleList.Add(Convert.ToDouble(new Expression(FiltrationModel.Model3)
        {
          Parameters = {
            ["x"] = ((object) x),
            ["y"] = ((object) y)
          }
        }.Evaluate()));
      
      
      if (this.spreadabilityValue <= 240.0)
        doubleList.Add(Convert.ToDouble(new Expression(SpreadabilityModel.Model1)
        {
          Parameters = {
            ["x"] = ((object) x),
            ["y"] = ((object) y)
          }
        }.Evaluate()));
      if (this.spreadabilityValue is > 240.0 and <= 350.0)
        doubleList.Add(Convert.ToDouble(new Expression(SpreadabilityModel.Model2)
        {
          Parameters = {
            ["x"] = ((object) x),
            ["y"] = ((object) y)
          }
        }.Evaluate()));
      if (this.spreadabilityValue > 350.0)
        doubleList.Add(Convert.ToDouble(new Expression(SpreadabilityModel.Model3)
        {
          Parameters = {
            ["x"] = ((object) x),
            ["y"] = ((object) y)
          }
        }.Evaluate()));
      
      if (this.viscosityValue <= 240.0)
        doubleList.Add(Convert.ToDouble(new Expression(ViscosityModel.Model1)
        {
          Parameters = {
            ["x"] = ((object) x),
            ["y"] = ((object) y)
          }
        }.Evaluate()));
      if (this.viscosityValue > 240.0)
        doubleList.Add(Convert.ToDouble(new Expression(ViscosityModel.Model2)
        {
          Parameters = {
            ["x"] = ((object) x),
            ["y"] = ((object) y)
          }
        }.Evaluate()));
      return doubleList;
    }
}