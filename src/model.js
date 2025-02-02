/* IMAGES */
import img_net from "./img/tools/net.png";
import img_net_flimsy from "./img/tools/net_flimsy.png";
import img_net_golden from "./img/tools/net_golden.png";
import img_net_colorful from "./img/tools/nook/net_colorful.png";
import img_net_outdoorsy from "./img/tools/nook/net_outdoorsy.png";
import img_net_custom from "./img/tools/nook/net_custom.png";

import img_fishing_rod from "./img/tools/fishing_rod.png";
import img_fishing_rod_flimsy from "./img/tools/fishing_rod_flimsy.png";
import img_fishing_rod_golden from "./img/tools/fishing_rod_golden.png";
import img_fishing_rod_colorful from "./img/tools/nook/fishing_rod_colorful.png";
import img_fishing_rod_outdoorsy from "./img/tools/nook/fishing_rod_outdoorsy.png";
import img_fishing_rod_custom from "./img/tools/nook/fishing_rod_custom.png";

import img_axe from "./img/tools/axe.png";
import img_axe_flimsy from "./img/tools/axe_flimsy.png";
import img_axe_stone from "./img/tools/axe_stone.png";
import img_axe_golden from "./img/tools/axe_golden.png";

import img_shovel from "./img/tools/shovel.png";
import img_shovel_flimsy from "./img/tools/shovel_flimsy.png";
import img_shovel_golden from "./img/tools/shovel_golden.png";
import img_shovel_colorful from "./img/tools/nook/shovel_colorful.png";
import img_shovel_outdoorsy from "./img/tools/nook/shovel_outdoorsy.png";
import img_shovel_custom from "./img/tools/nook/shovel_custom.png";

import img_slingshot from "./img/tools/slingshot.png";
import img_slingshot_golden from "./img/tools/slingshot_golden.png";
import img_slingshot_colorful from "./img/tools/nook/slingshot_colorful.png";
import img_slingshot_outdoorsy from "./img/tools/nook/slingshot_outdoorsy.png";

import img_watering_can from "./img/tools/watering_can.png";
import img_watering_can_flimsy from "./img/tools/watering_can_flimsy.png";
import img_watering_can_golden from "./img/tools/watering_can_golden.png";
import img_watering_can_colorful from "./img/tools/nook/watering_can_colorful.png";
import img_watering_can_outdoorsy from "./img/tools/nook/watering_can_outdoorsy.png";
import img_watering_can_custom from "./img/tools/nook/watering_can_custom.png";


export const ToolCategoryList = [
  {
    id: "CATEGORY.FILET",
    image: img_net,

    durability: {
      loss: ["LOSS.BREAK.FILET"],
      noLoss: ["NOLOSS.FILET"],
      breakswhen: ["LOSS.BREAK.FILET"],
      exceptions: [],
    },
  },
  {
    id: "CATEGORY.PECHE",
    image: img_fishing_rod,

    durability: {
      loss: ["LOSS.BREAK.PECHE"],
      noLoss: ["NOLOSS.PECHE.1", "NOLOSS.PECHE.2", "NOLOSS.PECHE.3"],
      breakswhen: ["LOSS.BREAK.PECHE"],
      exceptions: [],
    },
  },
  {
    id: "CATEGORY.HACHE",
    image: img_axe,

    durability: {
      loss: ["LOSS.HACHE.PELLE.1", "LOSS.BREAK.HACHE.2", "LOSS.HACHE.3"],
      noLoss: ["NOLOSS.HACHE.PELLE.1", "NOLOSS.HACHE.2"],
      breakswhen: ["BREAK.HACHE.PELLE.1", "LOSS.BREAK.HACHE.2"],
      exceptions: ["EXCEPT.HACHE.PELLE.1", "EXCEPT.HACHE.2"],
    },
  },
  {
    id: "CATEGORY.PELLE",
    image: img_shovel,

    durability: {
      loss: [
        "LOSS.HACHE.PELLE.1",
        "LOSS.PELLE.2",
        "LOSS.PELLE.3",
        "LOSS.PELLE.4",
      ],
      noLoss: [
        "NOLOSS.HACHE.PELLE.1",
        "NOLOSS.PELLE.2",
        "NOLOSS.PELLE.3",
        "NOLOSS.PELLE.4",
        "NOLOSS.PELLE.5",
      ],
      breakswhen: ["BREAK.HACHE.PELLE.1", "BREAK.PELLE.2"],
      exceptions: ["EXCEPT.HACHE.PELLE.1", "EXCEPT.PELLE.2"],
    },
  },
  {
    id: "CATEGORY.LANCEPIERRE",
    image: img_slingshot,

    durability: {
      loss: ["LOSS.BREAK.LANCEPIERRE"],
      noLoss: ["NOLOSS.LANCEPIERRE"],
      breakswhen: ["LOSS.BREAK.LANCEPIERRE"],
      exceptions: ["EXCEPT.LANCEPIERRE"],
    },
  },
  {
    id: "CATEGORY.ARROSOIR",
    image: img_watering_can,

    durability: {
      loss: ["LOSS.BREAK.ARROSOIR.1", "LOSS.BREAK.ARROSOIR.2"],
      noLoss: ["NOLOSS.ARROSOIR"],
      breakswhen: ["LOSS.BREAK.ARROSOIR.1", "LOSS.BREAK.ARROSOIR.2"],
      exceptions: ["EXCEPT.ARROSOIR.1", "EXCEPT.ARROSOIR.2"],
    },
  },
];

export const ToolList = [
  {
    id: "TYPE.FILET.RUDIMENTAIRE",
    category: "CATEGORY.FILET",
    image: img_net_flimsy,
    customizable: false,
    upgrade: "TYPE.FILET.NORMAL",
    durability: 10,
    hits: 5,
  },
  {
    id: "TYPE.FILET.NORMAL",
    category: "CATEGORY.FILET",

    image: img_net,
    customizable: true,
    upgrade: "TYPE.FILET.GOLD",
    durability: 30,
    hits: 5,
    ingredients: [
      { item: "KEY.ITEM.ID", number: 10 },
      { item: "KEY.ITEM.ID", number: 1 },
    ],
  },
  {
    id: "TYPE.FILET.COLORFUL",
    category: "CATEGORY.FILET",
    image: img_net_colorful,
    customizable: true,
    durability: 30,
    hits: 5,
  },
  {
    id: "TYPE.FILET.OUTDOORSY",
    category: "CATEGORY.FILET",
    image: img_net_outdoorsy,
    customizable: true,
    durability: 30,
    hits: 5,
  },
  {
    id: "TYPE.FILET.CUSTOM",
    category: "CATEGORY.FILET",
    image: img_net_custom,
    customizable: true,
    durability: 30,
    hits: 5,
  },
  {
    id: "TYPE.FILET.GOLD",
    category: "CATEGORY.FILET",
    image: img_net_golden,
    customizable: false,
    durability: 90,
    hits: 5,
  },
  {
    id: "TYPE.PECHE.RUDIMENTAIRE",
    category: "CATEGORY.PECHE",
    image: img_fishing_rod_flimsy,
    customizable: false,
    upgrade: "TYPE.PECHE.NORMAL",
    durability: 10,
    hits: 5,
  },
  {
    id: "TYPE.PECHE.NORMAL",
    category: "CATEGORY.PECHE",
    image: img_fishing_rod,
    customizable: true,
    upgrade: "TYPE.PECHE.GOLD",
    durability: 30,
    hits: 5,
  },
  {
    id: "TYPE.PECHE.COLORFUL",
    category: "CATEGORY.PECHE",
    image: img_fishing_rod_colorful,
    customizable: true,
    durability: 30,
    hits: 5,
  },
  {
    id: "TYPE.PECHE.OUTDOORSY",
    category: "CATEGORY.PECHE",
    image: img_fishing_rod_outdoorsy,
    customizable: true,
    durability: 30,
    hits: 5,
  },
  {
    id: "TYPE.PECHE.CUSTOM",
    category: "CATEGORY.PECHE",
    image: img_fishing_rod_custom,
    customizable: true,
    durability: 30,
    hits: 5,
  },
  {
    id: "TYPE.PECHE.GOLD",
    category: "CATEGORY.PECHE",
    image: img_fishing_rod_golden,
    customizable: false,
    durability: 90,
    hits: 5,
  },
  {
    id: "TYPE.HACHE.RUDIMENTAIRE",
    category: "CATEGORY.HACHE",
    image: img_axe_flimsy,
    customizable: false,
    durability: 40,
    upgrade: ["TYPE.HACHE.PIERRE", "TYPE.HACHE.NORMAL"],
    hits: 3,
  },
  {
    id: "TYPE.HACHE.NORMAL",
    category: "CATEGORY.HACHE",
    image: img_axe,
    customizable: false,
    durability: 100,
    upgrade: "TYPE.HACHE.GOLD",
    hits: 3,
  },
  {
    id: "TYPE.HACHE.PIERRE",
    category: "CATEGORY.HACHE",
    image: img_axe_stone,
    customizable: false,
    durability: 100,
    hits: 3,
  },
  {
    id: "TYPE.HACHE.GOLD",
    category: "CATEGORY.HACHE",
    image: img_axe_golden,
    customizable: false,
    durability: 200,
    hits: 3,
  },
  {
    id: "TYPE.PELLE.RUDIMENTAIRE",
    category: "CATEGORY.PELLE",
    image: img_shovel_flimsy,
    customizable: false,
    upgrade: "TYPE.PELLE.NORMAL",
    durability: 40,
    hits: 8,
  },
  {
    id: "TYPE.PELLE.NORMAL",
    category: "CATEGORY.PELLE",
    image: img_shovel,
    customizable: true,
    upgrade: "TYPE.PELLE.GOLD",
    durability: 100,
    hits: 8,
  },
  {
    id: "TYPE.PELLE.COLORFUL",
    category: "CATEGORY.PELLE",
    image: img_shovel_colorful,
    customizable: true,
    durability: 100,
    hits: 8,
  },
  {
    id: "TYPE.PELLE.OUTDOORSY",
    category: "CATEGORY.PELLE",
    image: img_shovel_outdoorsy,
    customizable: true,
    durability: 100,
    hits: 8,
  },
  {
    id: "TYPE.PELLE.CUSTOM",
    category: "CATEGORY.PELLE",
    image: img_shovel_custom,
    customizable: true,
    durability: 100,
    hits: 8,
  },
  {
    id: "TYPE.PELLE.GOLD",
    category: "CATEGORY.PELLE",
    image: img_shovel_golden,
    customizable: false,
    durability: 200,
    hits: 8,
  },
  {
    id: "TYPE.LANCEPIERRE.NORMAL",
    category: "CATEGORY.LANCEPIERRE",
    image: img_slingshot,
    customizable: true,
    upgrade: "TYPE.LANCEPIERRE.GOLD",
    durability: 20,
  },
  {
    id: "TYPE.LANCEPIERRE.COLORFUL",
    category: "CATEGORY.LANCEPIERRE",
    image: img_slingshot_colorful,
    customizable: true,
    durability: 20,
  },
  {
    id: "TYPE.LANCEPIERRE.OUTDOORSY",
    category: "CATEGORY.LANCEPIERRE",
    image: img_slingshot_outdoorsy,
    customizable: true,
    durability: 20,
  },
  {
    id: "TYPE.LANCEPIERRE.GOLD",
    category: "CATEGORY.LANCEPIERRE",
    image: img_slingshot_golden,
    customizable: false,
    durability: 60,
  },
  {
    id: "TYPE.ARROSOIR.RUDIMENTAIRE",
    category: "CATEGORY.ARROSOIR",
    image: img_watering_can_flimsy,
    customizable: false,
    upgrade: "TYPE.ARROSOIR.NORMAL",
    durability: 20,
    space: "(1x1)",
  },
  {
    id: "TYPE.ARROSOIR.NORMAL",
    category: "CATEGORY.ARROSOIR",
    image: img_watering_can,
    customizable: true,
    upgrade: "TYPE.ARROSOIR.GOLD",
    durability: 60,
    space: "(2x3)",
    hits: 6,
  },
  {
    id: "TYPE.ARROSOIR.COLORFUL",
    category: "CATEGORY.ARROSOIR",
    image: img_watering_can_colorful,
    durability: 60,
    space: "(2x3)",
    hits: 6,
  },
  {
    id: "TYPE.ARROSOIR.OUTDOORSY",
    category: "CATEGORY.ARROSOIR",
    image: img_watering_can_outdoorsy,
    durability: 60,
    space: "(2x3)",
    hits: 6,
  },
  {
    id: "TYPE.ARROSOIR.CUSTOM",
    category: "CATEGORY.ARROSOIR",
    image: img_watering_can_custom,
    durability: 60,
    space: "(2x3)",
    hits: 6,
  },
  {
    id: "TYPE.ARROSOIR.GOLD",
    category: "CATEGORY.ARROSOIR",
    image: img_watering_can_golden,
    customizable: false,
    durability: 180,
    space: "(3x3)",
    hits: 9,
  },
];

export const BugsList = [
  {
    id: "BUG.T",
    north: [
      "MONTH.JAN",
      "MONTH.FEB",
      "MONTH.MAR",
      "MONTH.APR",
      "MONTH.NOV",
      "MONTH.DEC",
    ],
    south: [
      "MONTH.MAY",
      "MONTH.JUN",
      "MONTH.JUL",
      "MONTH.AUG",
      "MONTH.SEP",
      "MONTH.OCT",
    ],
    hours: "HOURS.NIGHT",
    image: img_watering_can_golden,
    price: 8000,
    flick: 12000,
    space: "SPACE.FLOOR",
  },
  {
    id: "BUG.S",
    north: [
      "MONTH.JAN",
      "MONTH.FEB",
      "MONTH.MAR",
      "MONTH.APR",
      "MONTH.NOV",
      "MONTH.DEC",
    ],
    south: [
      "MONTH.MAY",
      "MONTH.JUN",
      "MONTH.JUL",
      "MONTH.AUG",
      "MONTH.SEP",
      "MONTH.OCT",
    ],
    hours: "HOURS.NIGHT",
    image: img_watering_can_golden,
    price: 8000,
    flick: 12000,
    space: "SPACE.FLOOR",
  },
];
