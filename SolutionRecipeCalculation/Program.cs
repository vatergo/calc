using System.Runtime.InteropServices.JavaScript;
using System.Threading.Tasks;
using Extreme.Mathematics.Optimization;
using SolutionRecipeCalculation;

return;

public partial class App
{
    [JSExport]
    internal static async Task<string> Calculation(double filtrationValue, double spreadabilityValue, double viscosityValue, double x = -1, double y = -1)
    {
        Extreme.License.Verify("53499-05472-27249-09200");

        var controller = new Controller
        {
            filtrationValue = filtrationValue,
            spreadabilityValue = spreadabilityValue,
            viscosityValue = viscosityValue
        };

        var result = await controller.FindSolutionAsync();

        var pf = result.Minimum[0];
        var pl = result.Minimum[1];
        if (x > -1 & y > -1)
        {
            pf = x;
            pl = y;
        }
        
        var list = controller.SubstituteValue(pf, pl);
        list.Add(result.Minimum[0]);
        list.Add(result.Minimum[1]);
        
        return string.Join(":", list.ToArray());
    }
    
    [JSExport]
    internal static async Task<string> CalculationRange(double startFiltrationValue, double endFiltrationValue, double startSpreadabilityValue, double endSpreadabilityValue, double startViscosityValue, double endViscosityValue)
    {
        Extreme.License.Verify("53499-05472-27249-09200");
        const int step = 5;
        var resultList = new List<string>();
        
        var controller = new Controller();
        
        for (var i = startFiltrationValue; i <= endFiltrationValue; i+=step)
        {
            for (var j = startSpreadabilityValue; j <= endSpreadabilityValue; j+=step)
            {
                for (var k = startViscosityValue; k <= endViscosityValue; k+=step)
                {
                    controller.filtrationValue = i;
                    controller.spreadabilityValue = j;
                    controller.viscosityValue = k;
                    
                    var result = await controller.FindSolutionAsync();
                    var list = controller.SubstituteValue(result.Minimum[0], result.Minimum[1]);
                    list.Add(result.Minimum[0]);
                    list.Add(result.Minimum[1]);
                    
                    list.Add(i);
                    list.Add(j);
                    list.Add(k);
                    
                    resultList.Add(string.Join(":", list.ToArray()));
                }
            }
        }
        return string.Join("|", resultList.ToArray());
    }
}