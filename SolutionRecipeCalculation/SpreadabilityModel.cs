using Extreme.Mathematics;

namespace SolutionRecipeCalculation;

internal static class SpreadabilityModel
{
    public const string Model1 = "220.079 + 594.23 * y - 54.7803 * x - 661.3888 * Pow(y, 2) - 644.0422 * x * y - 81.8865 * Pow(x, 2)";
    public const string Model2 = "271.124 + 836.3447 * y - 464.8676 * x - 1326.5561 * Pow(y, 2) - 905.5659 * x * y  + 803.4287 * Pow(x, 2)";
    public const string Model3 = "348.333 - 916.667 * x + 175.000 * y";

    public static void GetModel1(double value, ref Vector<double> x, ref Vector<double> f)
    {
        var num = 220.079 - value;
        f[1] = num + 594.23 * x[1] - 54.7803 * x[0] - 661.3888 * x[1] * x[1] - 644.0422 * x[0] * x[1] - 81.8865 * x[0] * x[0];
    }

    public static void GetJacobian1(ref Vector<double> x, ref Matrix<double> J)
    {
        J[1, 0] = -163.733 * x[0] - 644.0422 * x[1] - 54.7803;
        J[1, 1] = -644.0422 * x[0] - 1322.7776 * x[1] + 594.23;
    }

    public static void GetModel2(double value, ref Vector<double> x, ref Vector<double> f)
    {
        var num = 271.124 - value;
        f[1] = num + 836.3447 * x[1] - 464.8676 * x[0] - 1326.5561 * x[1] * x[1] - 905.5659 * x[0] * x[1] + 803.4287 * x[0] * x[0];
    }

    public static void GetJacobian2(ref Vector<double> x, ref Matrix<double> J)
    {
        J[1, 0] = 1606.8574 * x[0] - 905.5659 * x[1] - 464.8676;
        J[1, 1] = -905.5659 * x[0] - 2653.1122 * x[1] + 836.3447;
    }

    public static void GetModel3(double value, ref Vector<double> x, ref Vector<double> f)
    {
        var num = 348.333 - value;
        f[1] = num - 916.667 * x[0] + 175.0 * x[1];
    }

    public static void GetJacobian3(ref Vector<double> x, ref Matrix<double> J)
    {
        J[1, 0] = -916.667;
        J[1, 1] = 175.0;
    }
}