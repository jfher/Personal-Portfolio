import { images } from "@/utils/imgLoader";

export const projectData = [
    { id: crypto.randomUUID(), imgUrl: images.TASKY, webUrl: 'https://jfher-taskify.netlify.app', repository: 'https://github.com/jfher/Taskify', title: 'Taskify', description: 'Plataforma para gestion de tareas', stack: ['NodeJs', 'Express', 'JWT', 'MongoDB', 'Docker', 'React', 'Zustand', 'Tanstack Query'] },
    { id: crypto.randomUUID(), imgUrl: images.HEPAWS, webUrl: 'https://healthypawsjfhs.netlify.app', repository: 'https://github.com/jfher/HealthyPaws', title: 'HealthyPaws', description: 'Plataforma para adopcion de mascotas para una veterinaria local', stack: ['NodeJs', 'Express', 'JWT', 'MongoDB', 'Docker', 'React', 'Zustand', ' TailwindCSS', 'ShadCN'] },
    { id: crypto.randomUUID(), imgUrl: images.PLANIFY, webUrl: 'https://planifyhub.netlify.app', repository: 'https://github.com/jfher/PlanifyHub', title: 'PlanifyHub', description: 'Plataforma de gestion de vida, tareas, habitos y metas para mejorar dia a dia', stack: ['NodeJs', 'Express', 'JWT', 'MongoDB', 'Docker', 'React', 'Axios', 'Zustand', 'Zod', ' TailwindCSS', 'ShadCN'] },
]