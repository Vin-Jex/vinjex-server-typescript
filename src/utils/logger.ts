import { pino } from "pino";
import dayjs from "dayjs";
import PinoPretty from "pino-pretty";

const log = pino(
  {
    base: {
      pid: false,
    },
    timestamp: () => `,"time":"${dayjs().format()}"`,
  },
  PinoPretty()
);

export default log;
