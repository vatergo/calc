import { RangeProps } from "./types";
import styles from "./index.module.css";
import { useCallback, useState } from "react";
import Input from "./Input";
import Output from "./Output";

const Range = ({ dotnet }: RangeProps) => {
  const [startFiltration, setStartFiltration] = useState(80);
  const [endFiltration, setEndFiltration] = useState(90);
  const [startSpreadability, setStartSpreadability] = useState(220);
  const [endSpreadability, setEndSpreadability] = useState(230);
  const [startViscosity, setStartViscosity] = useState(200);
  const [endViscosity, setEndViscosity] = useState(220);

  const [pricePF, setPricePF] = useState(100);
  const [pricePL, setPricePL] = useState(100);

  const [data, setData] = useState<number[][] | null>(null);
  const [minPrice, setMinPrice] = useState(0);
  const [minSumData, setMinSumData] = useState<number[] | null>(null);
  const [minPriceData, setMinPriceData] = useState<number[] | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    setData(null);
    setLoading(true);
    if (dotnet) {
      dotnet.App.CalculationRange(
        startFiltration,
        endFiltration,
        startSpreadability,
        endSpreadability,
        startViscosity,
        endViscosity
      ).then((values: string) => {
        const result = values
          .split("|")
          .map((item) => item.split(":").map((item) => Number(item)));

        let minSum = 999999;
        let minSumRes: number[] = [];
        let minPrice = 999999;
        let minPriceRes: number[] = [];

        for (let i = 0; i < result.length; i++) {
          const current = result[i];
          const sum = current[3] + current[4];
          const price = current[3] * pricePF + current[4] * pricePL;

          if (minSum > sum) {
            minSum = sum;
            minSumRes = [current[3], current[4]];
          }

          if (minPrice > price) {
            minPrice = price;
            minPriceRes = [current[3], current[4]];
          }
        }

        setMinSumData(
          result.filter(
            (item) => item[3] === minSumRes[0] && item[4] === minSumRes[1]
          )[0]
        );

        setMinPriceData(
          result.filter(
            (item) => item[3] === minPriceRes[0] && item[4] === minPriceRes[1]
          )[0]
        );
        setData(result);
        setMinPrice(minPrice);
        setLoading(false);
      });
    }
  }, [
    dotnet,
    startFiltration,
    endFiltration,
    startSpreadability,
    endSpreadability,
    startViscosity,
    endViscosity,
    pricePF,
    pricePL,
  ]);

  return (
    <div className={styles.container}>
      <Input
        startFiltration={startFiltration}
        endFiltration={endFiltration}
        startSpreadability={startSpreadability}
        endSpreadability={endSpreadability}
        startViscosity={startViscosity}
        endViscosity={endViscosity}
        onChangeStartFiltartion={setStartFiltration}
        onChangeEndFiltartion={setEndFiltration}
        onChangeStartSpreadability={setStartSpreadability}
        onChangeEndSpreadability={setEndSpreadability}
        onChangeStartViscosity={setStartViscosity}
        onChangeEndViscosity={setEndViscosity}
        pricePF={pricePF}
        pricePL={pricePL}
        onChangePricePF={setPricePF}
        onChangePricePL={setPricePL}
        onSubmit={onSubmit}
      />
      <div className={styles.wrapper}>
        {loading ? (
          <span className="loader" />
        ) : (
          <>
            {data && minSumData && minPriceData ? (
              <Output
                data={data}
                minPrice={minPrice}
                minSumData={minSumData}
                minPriceData={minPriceData}
              />
            ) : (
              <span>Нажмите кнопку "Рассчитать"</span>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Range;
