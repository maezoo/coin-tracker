import { useQuery } from "react-query";
import { useParams } from "react-router";
import { fetchCoinHistory } from "../api";

interface ChartProps {
  coinId: string;
}
function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery(["ohlv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return <h1>Chart</h1>;
}

export default Chart;
