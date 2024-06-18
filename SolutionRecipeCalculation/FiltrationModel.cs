using Extreme.Mathematics;

namespace SolutionRecipeCalculation;

internal static class FiltrationModel
{
    public const string Model1 = "388 - 1479.9 * x - 920.1 * y + 1600.1 * x * y + 1599.9 * Pow(x, 2) + 1000.1 * Pow(y, 2)";
    public const string Model2 = "440.81 - 1022.388 * x - 757.82 * y";
    public const string Model3 = "1221.67 - 5309.76 * x - 5149.04 * y";

    public static void GetModel1(double value, ref Vector<double> x, ref Vector<double> f)
    {
        double num = 388.0 - value;
        f[0] = num - 1479.9 * x[0] - 920.1 * x[1] + 1600.1 * x[0] * x[1] + 1599.9 * x[0] * x[0] + 1000.1 * x[1] * x[1];
    }

    public static void GetJacobian1(ref Vector<double> x, ref Matrix<double> J)
    {
        J[0, 0] = 3199.8 * x[0] + 1600.1 * x[1] - 1479.9;
        J[0, 1] = 1600.1 * x[0] + 2000.2 * x[1] - 920.1;
    }

    public static void GetModel2(double value, ref Vector<double> x, ref Vector<double> f)
    {
        double num = 440.81 - value;
        f[0] = num - 1022.388 * x[0] - 757.82 * x[1];
    }

    public static void GetJacobian2(ref Vector<double> x, ref Matrix<double> J)
    {
        J[0, 0] = -1022.388;
        J[0, 1] = -757.82;
    }

    public static void GetModel3(double value, ref Vector<double> x, ref Vector<double> f)
    {
        double num = 1221.67 - value;
        f[0] = num - 5309.76 * x[0] - 5149.04 * x[1];
    }

    public static void GetJacobian3(ref Vector<double> x, ref Matrix<double> J)
    {
        J[0, 0] = -5309.76;
        J[0, 1] = -5149.04;
    }
    
}