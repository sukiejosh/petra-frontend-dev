import VueApexCharts from "vue3-apexcharts";
import { UserModule } from "~/types";

// Setup Pinia
// https://pinia.esm.dev/
export const install: UserModule = ({ isClient, initialState, app }) => {
  app.use(VueApexCharts);
};
