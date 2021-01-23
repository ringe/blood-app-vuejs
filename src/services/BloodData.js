import http from "../BloodAPI";

class BloodData {
  getAll() {
    return http.get("/measures");
  }

  get(id) {
    return http.get(`/measures/${id}`);
  }

  create(data) {
    return http.post("/measures", data);
  }

  update(id, data) {
    return http.put(`/measures/${id}`, data);
  }

  delete(id) {
    return http.delete(`/measures/${id}`);
  }

  deleteAll() {
    return http.delete(`/measures`);
  }
}

export default new BloodData();
