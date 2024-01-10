import ResultadoController from "../controllers/Resultado";
import ResultadoService from "../services/Resultado";

const resultadoService = new ResultadoService();
const resultadoController = new ResultadoController(resultadoService);

export { resultadoController }