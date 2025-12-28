import { GitCompare, Github, Gitlab } from "lucide-react";
import { images } from "@/utils/imgLoader";

export const stackData = [
    { id: crypto.randomUUID(), name: 'HTML', url: images.HTML, subStack: [] },
    { id: crypto.randomUUID(), name: 'CSS', url: images.CSS, subStack: [] },
    { id: crypto.randomUUID(), name: 'Javascript', url: images.JS, subStack: [] },
    { id: crypto.randomUUID(), name: 'Typescript', url: images.TS, subStack: [] },
    {
        id: crypto.randomUUID(), name: 'React', url: images.REACT, subStack: [
            { id: crypto.randomUUID(), name: 'Vite', url: images.VITE },
            { id: crypto.randomUUID(), name: 'Axios', url: images.AXIOS },
            { id: crypto.randomUUID(), name: 'Tanstack Query', url: images.TANSTK },
            { id: crypto.randomUUID(), name: 'Zustand', url: images.ZUS },
            { id: crypto.randomUUID(), name: 'Redux', url: images.RDX },
        ]
    },
    {
        id: crypto.randomUUID(), name: 'SQL', url: images.SQL, subStack: [
            { id: crypto.randomUUID(), name: 'Postgres', url: images.POST },
            { id: crypto.randomUUID(), name: 'Oracle', url: images.ORCL },
        ]
    },
    {
        id: crypto.randomUUID(), name: 'NOSQL', url: images.NOSQL, subStack: [
            { id: crypto.randomUUID(), name: 'MongoDB', url: images.MONGO }
        ]
    },
    {
        id: crypto.randomUUID(), name: 'Python', url: images.PYTHON, subStack: [
            { id: crypto.randomUUID(), name: 'Pandas', url: images.PANDA },
            { id: crypto.randomUUID(), name: 'Flet', url: images.FLET },
        ]
    },
    {
        id: crypto.randomUUID(), name: '.Net Core', url: images.NET, subStack: [
            { id: crypto.randomUUID(), name: 'Seq', url: images.SEQ },
            { id: crypto.randomUUID(), name: 'Serilog', url: images.SERILOG },
            { id: crypto.randomUUID(), name: 'Entity Framework', url: images.EF },
            { id: crypto.randomUUID(), name: 'Fluent Validation', url: images.FV },
            { id: crypto.randomUUID(), name: 'Dapper', url: images.DAPPER },
        ]
    },
    {
        id: crypto.randomUUID(), name: 'Testing', url: images.TEST, subStack: [
            { id: crypto.randomUUID(), name: 'Jest', url: images.JEST },
            { id: crypto.randomUUID(), name: 'Vitest', url: images.VITEST },
        ]
    },
    {
        id: crypto.randomUUID(), name: 'Estilos', url: images.STYLES, subStack: [
            { id: crypto.randomUUID(), name: 'TailwindCSS', url: images.TAIL },
            { id: crypto.randomUUID(), name: 'Bootstrap', url: images.BOOTS },
            { id: crypto.randomUUID(), name: 'ShadCN', url: images.SHADCN },
        ]
    },
    {
        id: crypto.randomUUID(), name: 'Otros', url: images.TOOLS, subStack: [
            { id: crypto.randomUUID(), name: 'Postman', url: images.PMAN },
            { id: crypto.randomUUID(), name: 'Swagger', url: images.SWG },
        ]
    },
    {
        id: crypto.randomUUID(), name: 'CI', url: images.GIT, subStack: [
            { id: crypto.randomUUID(), name: 'GitLab', url: images.GITHUB, },
            { id: crypto.randomUUID(), name: 'GitHub', url: images.GITLAB, },
        ]
    },
]