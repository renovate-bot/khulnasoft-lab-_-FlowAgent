export const flowagentPrefix = "flowagent"

export function globalColor(key: string): string {
  if (key == "transparent") {
    return "transparent"
  }
  return globalColorNormal.get(key) ?? ""
}

export function hasGlobalColor(key: string): boolean {
  return globalColorNormal.has(key)
}

const nineStepColor = ["white", "gray", "grayBlue", "blackAlpha"]

export const hasNineStepColor = (color: string): boolean => {
  return nineStepColor.includes(color)
}

const globalColorNormal: Map<string, string> = new Map([
  ["--flowagent-white-01", "#ffffffff"],
  ["--flowagent-white-02", "#ffffffe6"],
  ["--flowagent-white-03", "#ffffffc0"],
  ["--flowagent-white-04", "#ffffff80"],
  ["--flowagent-white-05", "#ffffff4c"],
  ["--flowagent-white-06", "#fff3"],
  ["--flowagent-white-07", "#ffffff28"],
  ["--flowagent-white-08", "#ffffff1e"],
  ["--flowagent-white-09", "#ffffff19"],

  ["--flowagent-gray-01", "#000000ff"],
  ["--flowagent-gray-02", "#1f1f1fff"],
  ["--flowagent-gray-03", "#5c5c5cff"],
  ["--flowagent-gray-04", "#999999ff"],
  ["--flowagent-gray-05", "#c2c2c2ff"],
  ["--flowagent-gray-06", "#d6d6d6ff"],
  ["--flowagent-gray-07", "#e0e0e0ff"],
  ["--flowagent-gray-08", "#ebebebff"],
  ["--flowagent-gray-09", "#f5f5f5ff"],

  ["--flowagent-grayBlue-01", "#0b0c0fff"],
  ["--flowagent-grayBlue-02", "#1d2129ff"],
  ["--flowagent-grayBlue-03", "#787e85ff"],
  ["--flowagent-grayBlue-04", "#a9aeb8ff"],
  ["--flowagent-grayBlue-05", "#bbc0c9ff"],
  ["--flowagent-grayBlue-06", "#c9cdd4ff"],
  ["--flowagent-grayBlue-07", "#dadee5ff"],
  ["--flowagent-grayBlue-08", "#e5e6ebff"],
  ["--flowagent-grayBlue-09", "#f2f3f5ff"],

  ["--flowagent-techPurple-n-01", "#100974"],
  ["--flowagent-techPurple-01", "#26189c"],
  ["--flowagent-techPurple-02", "#422ec4"],
  ["--flowagent-techPurple-03", "#654aec"],
  ["--flowagent-techPurple-04", "#8368f0"],
  ["--flowagent-techPurple-05", "#a087f4"],
  ["--flowagent-techPurple-06", "#bca6f7"],
  ["--flowagent-techPurple-07", "#d6c7fb"],
  ["--flowagent-techPurple-08", "#f0e8ff"],

  ["--flowagent-techPink-n-01", "#790a5a"],
  ["--flowagent-techPink-01", "#a61d7a"],
  ["--flowagent-techPink-02", "#d2369c"],
  ["--flowagent-techPink-03", "#ff58be"],
  ["--flowagent-techPink-04", "#ff75c5"],
  ["--flowagent-techPink-05", "#ff92ce"],
  ["--flowagent-techPink-06", "#ffaed8"],
  ["--flowagent-techPink-07", "#ffcbe4"],
  ["--flowagent-techPink-08", "#ffe8f2"],

  ["--flowagent-blackAlpha-01", "#000000e0"],
  ["--flowagent-blackAlpha-02", "#000000e6"],
  ["--flowagent-blackAlpha-03", "#000000bf"],
  ["--flowagent-blackAlpha-04", "#00000080"],
  ["--flowagent-blackAlpha-05", "#0000004d"],
  ["--flowagent-blackAlpha-06", "#00000033"],
  ["--flowagent-blackAlpha-07", "#00000029"],
  ["--flowagent-blackAlpha-08", "#00000014"],
  ["--flowagent-blackAlpha-09", "#0000000a"],

  ["--flowagent-blue-n-01", "#042379"],
  ["--flowagent-blue-01", "#0a39a6"],
  ["--flowagent-blue-02", "#1353d2"],
  ["--flowagent-blue-03", "#1e6fff"],
  ["--flowagent-blue-04", "#4690ff"],
  ["--flowagent-blue-05", "#6aa1ff"],
  ["--flowagent-blue-06", "#94bfff"],
  ["--flowagent-blue-07", "#bedaff"],
  ["--flowagent-blue-08", "#e8f4ff"],

  ["--flowagent-purple-n-01", "#2a0874"],
  ["--flowagent-purple-01", "#44159b"],
  ["--flowagent-purple-02", "#6227c3"],
  ["--flowagent-purple-03", "#863eea"],
  ["--flowagent-purple-04", "#9f5eee"],
  ["--flowagent-purple-05", "#b77ff2"],
  ["--flowagent-purple-06", "#cda1f7"],
  ["--flowagent-purple-07", "#e2c4fb"],
  ["--flowagent-purple-08", "#f5e8ff"],

  ["--flowagent-red-n-01", "#770813"],
  ["--flowagent-red-01", "#a1151e"],
  ["--flowagent-red-02", "#cb272d"],
  ["--flowagent-red-03", "#f53f3f"],
  ["--flowagent-red-04", "#f76560"],
  ["--flowagent-red-05", "#f98981"],
  ["--flowagent-red-06", "#fbaca3"],
  ["--flowagent-red-07", "#fdcdc5"],
  ["--flowagent-red-08", "#ffece8"],

  ["--flowagent-green-n-01", "#02672d"],
  ["--flowagent-green-01", "#048136"],
  ["--flowagent-green-02", "#079c3e"],
  ["--flowagent-green-03", "#0bb645"],
  ["--flowagent-green-04", "#2dc55b"],
  ["--flowagent-green-05", "#55d376"],
  ["--flowagent-green-06", "#81e297"],
  ["--flowagent-green-07", "#b2f0be"],
  ["--flowagent-green-08", "#e8ffec"],

  ["--flowagent-yellow-n-01", "#795d00"],
  ["--flowagent-yellow-01", "#a68501"],
  ["--flowagent-yellow-02", "#d2b002"],
  ["--flowagent-yellow-03", "#f8b804"],
  ["--flowagent-yellow-04", "#ffea32"],
  ["--flowagent-yellow-05", "#fff45f"],
  ["--flowagent-yellow-06", "#fffb8d"],
  ["--flowagent-yellow-07", "#ffffba"],
  ["--flowagent-yellow-08", "#fdffd6"],

  ["--flowagent-orange-n-01", "#792e00"],
  ["--flowagent-orange-01", "#a64500"],
  ["--flowagent-orange-02", "#d25f00"],
  ["--flowagent-orange-03", "#ff7d00"],
  ["--flowagent-orange-04", "#ff9a2e"],
  ["--flowagent-orange-05", "#ffb65d"],
  ["--flowagent-orange-06", "#ffcf8b"],
  ["--flowagent-orange-07", "#ffe4ba"],
  ["--flowagent-orange-08", "#fff7e8"],

  ["--flowagent-cyan-n-01", "#045677"],
  ["--flowagent-cyan-01", "#0c7ca1"],
  ["--flowagent-cyan-02", "#16a4cc"],
  ["--flowagent-cyan-03", "#24d1f6"],
  ["--flowagent-cyan-04", "#4adef8"],
  ["--flowagent-cyan-05", "#71eafa"],
  ["--flowagent-cyan-06", "#98f3fb"],
  ["--flowagent-cyan-07", "#c0fafd"],
  ["--flowagent-cyan-08", "#e8ffff"],

  ["--flowagent-brand-01", "#654aecff"],
  ["--flowagent-brand-02", "#ff58beff"],
])
