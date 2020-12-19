import { Request, Response } from "express";

export default class PagesController {
  async index(req: Request, res: Response) {
    let toReturn = [
      { title: "Home", icon: "fa-home", url: "page://home", content: [] },
      {
        title: "Camera",
        icon: "fa-building",
        url: "page://camera",
        content: [
          {
            type: "post",
            title: "Mensagens do Presidente",
            properties: { categories: ["messages"] },
          },
          {
            type: "post",
            title: "Notícias",
            properties: { categories: ["news"] },
          },
          {
            type: "post",
            title: "Horas e serviços",
            properties: { categories: ["schedules", "services"] },
          },
          {
            type: "post",
            title: "Taxas e Tarifários",
            properties: { categories: ["taxes"] },
          },
        ],
      },
      {
        title: "Comunicar",
        icon: "fa-comments",
        url: "page://comunicar",
        content: [],
      },
      {
        title: "Proteção civil",
        icon: "fa-exclamation-triangle",
        url: "page://protecao-civil",
        content: [],
      },
      { title: "Covid", icon: "fa-medkit", url: "page://covid", content: [] },
      {
        title: "Agenda",
        icon: "fa-calendar",
        url: "page://agenda",
        content: [],
      },
    ];

    return res.json(toReturn);
  }
}
