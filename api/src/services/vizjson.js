import vizJson from "../viz/viz.json"
import fetch from "node-fetch"

export const getViz = async ({ name }) =>  {
  if (process.env.VIZ_JSON) {
    const vJson = require("../viz/" + process.env.VIZ_JSON)
    for (const d of vJson["data"]) {
      if (d["url"]) {
        // retrieve data from url to send to client
        const response = await fetch(d["url"])
        const json = await response.json()
        d["values"] = json
      }
    }
    return {
      name: name,
      data: JSON.stringify(vJson)
    }
  } else {
    return {
      name: name,
      data: JSON.stringify(vizJson)
    }
  }
}