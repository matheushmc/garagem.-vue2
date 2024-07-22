import axios from "axios";
export default class MarcasApi {
  async buscarTodasAsMarcas() {
    const { data } = await axios.get("/Marcas/");
    return data.results;
  }
  async adicionarMarca(marca) {
    const { data } = await axios.post("/Marcas/", marca);
    return data.results;
  }
  async atualizarMarca(marca) {
    const { data } = await axios.put(`/Marcas/${marca.id}/`, marca);
    return data.results;
  }
  async excluirMarca(id) {
    const { data } = await axios.delete(`/Marcas/${id}/`);
    return data.results;
  }
}
