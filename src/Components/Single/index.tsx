import { useCallback, useState } from "react";
import Input from "./Input";
import Output from "./Output";
import { SingleProps } from "./types";
import styles from "./index.module.css";

const Single = ({ dotnet }: SingleProps) => {
  const [filtration, setFiltration] = useState(80);
  const [spreadability, setSpreadability] = useState(220);
  const [viscosity, setViscosity] = useState(130);
  const [data, setData] = useState<number[] | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(() => {
    setData(null);
    setLoading(true);
    if (dotnet) {
      dotnet.App.Calculation(filtration, spreadability, viscosity).then(
        (values: string) => {
          setData(values.split(":").map((item) => Number(item)));
          setLoading(false);
        }
      );
    }
  }, [dotnet, filtration, spreadability, viscosity]);

  const onChange = useCallback(
    (PF: number, PL: number) => {
      if (dotnet) {
        dotnet.App.Calculation(
          filtration,
          spreadability,
          viscosity,
          PF,
          PL
        ).then((values: string) => {
          setData(values.split(":").map((item) => Number(item)));
        });
      }
    },
    [dotnet, filtration, spreadability, viscosity]
  );

  return (
    <div className={styles.container}>
      <Input
        filtration={filtration}
        spreadability={spreadability}
        viscosity={viscosity}
        onChangeFiltartion={setFiltration}
        onChangeSpreadability={setSpreadability}
        onChangeViscosity={setViscosity}
        onSubmit={onSubmit}
      />
      <div className={styles.wrapper}>
        {loading ? (
          <span className="loader" />
        ) : (
          <>
            {data ? (
              <Output
                filtration={data[0]}
                spreadability={data[1]}
                viscosity={data[2]}
                PF={Number(data[3].toFixed(4))}
                PL={Number(data[4].toFixed(4))}
                onChange={onChange}
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

export default Single;
