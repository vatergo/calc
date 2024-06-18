using Extreme.Mathematics;

namespace SolutionRecipeCalculation;

internal static class ViscosityModel
{
    public const string Model1 = "29.294 + 819.8383 * x - 32.8641 * y";
    public const string Model2 = "-43.621 + 2811.9621 * y + 365.5409 * x - 8351.5551 * Pow(y, 2) - 2275.8001 * x * y + 2564.79 * Pow(x, 2)";

    public static void GetModel1(double value, ref Vector<double> x, ref Vector<double> f)
    {
        var num = 29.294 - value;
        f[2] = num + 819.8383 * x[0] - 32.8641 * x[1];
    }

    public static void GetJacobian1(ref Vector<double> x, ref Matrix<double> J)
    {
        J[2, 0] = 819.8383;
        J[2, 1] = -32.8641;
    }

    public static void GetModel2(double value, ref Vector<double> x, ref Vector<double> f)
    {
        var num = -43.621 - value;
        f[2] = num + 2811.9621 * x[1] + 365.5409 * x[0] - 8351.5551 * x[1] * x[1] - 2275.8001 * x[0] * x[1] + 2564.79 * x[0] * x[0];
    }

    public static void GetJacobian2(ref Vector<double> x, ref Matrix<double> J)
    {
        J[2, 0] = 5129.58 * x[0] - 2275.8001 * x[1] + 365.5409;
        J[2, 1] = -2275.8001 * x[0] - 16703.1102 * x[1] + 2881.9621;
    }
}