module.exports = async function(context, req) {
  const dreidel = [' נ (Nun)',' ג (Gimmel)',' ה (Hay)',' ש (Shin)'];

  function spin() {
    const randomIndex = Math.floor(Math.random() * dreidel.length);
    return dreidel[randomIndex];
  }

  const result = spin();

  context.res = {
    body: result,
  };
};
