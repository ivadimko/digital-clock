export default {
  leadZero(int) {
    return (int >= 0 && int < 10) ? (`0${int}`) : int;
  },
  getTwelve(int) {
    return int > 12 ? int - 12 : int;
  },
};
