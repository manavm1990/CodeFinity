// TODO: Accommodate for the each and every holiday?
export const getVampire = () =>
  new Date().toLocaleDateString("en-us", {
    month: "numeric",
    day: "numeric",
  }) === "10/31"
    ? "🧛🏾‍♂️"
    : ""
