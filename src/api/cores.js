import axios from "axios";
export default class CoresApi {
  async buscarTodasAsCores() {
    const { data } = await axios.get("/Cores/");
    return data.results;
  }
  async adicionarCor(cor) {
    const { data } = await axios.post("/Cores/", cor);
    return data.results;
  }
  async atualizarCor(cor) {
    const { data } = await axios.put(`/Cores/${cor.id}/`, cor);
    return data.results;
  }
  async excluirCor(id) {
    const { data } = await axios.delete(`/Cores/${id}/`);
    return data.results;
  }
}
