import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";

const colors = [
    "white",
    "black",
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
];
//
// 
// `px-1`,`px-2`,`px-3`,`px-4`, `py-1`,`py-1.5`,`py-2`,`py-3`,
const safelist = [
    ...colors.map((v) => `bg-${v}`),
    ...colors.map((v) => `bg-${v}-100`),
    ...colors.map((v) => `bg-${v}-200`),
    ...colors.map((v) => `bg-${v}-400`),
    ...colors.map((v) => `bg-${v}-500`),
    ...colors.map((v) => `hover:bg-${v}`),
    ...colors.map((v) => `hover:bg-${v}-100`),
    ...colors.map((v) => `hover:bg-${v}-300`),
    ...colors.map((v) => `hover:bg-${v}-400`),
    ...colors.map((v) => `hover:bg-${v}-500`),
    ...colors.map((v) => `active:bg-${v}-600`),
    'active:border-blue-500',
    ...colors.map((v) => `border-${v}-300`),
    ...colors.map((v) => `border-${v}-400`),
    ...colors.map((v) => `border-${v}-500`),
    ...colors.map((v) => `hover:border-${v}-300`),
    ...colors.map((v) => `hover:border-${v}-400`),
    ...colors.map((v) => `hover:border-${v}-500`),
    ...colors.map((v) => `text-${v}-500`),
    ...colors.map((v) => `text-${v}`),
    ...colors.map((v) => `hover:text-${v}-400`),
    ...colors.map((v) => `hover:text-${v}`),
    'text-#606266',
    'border-#DCDFE6',
    'border-1',
    'text-white',
    ...Array.from({ length: 8 }, (_, i) => `px-${i + 1}`),
    ...Array.from({ length: 8 }, (_, i) => `py-${i + 1}`),
    ...Array.from({ length: 8 }, (_, i) => `py-${i + 0.5}`),
    ...['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl'].map((v) => `text-${v}`),
    ...Array.from({ length: 10 }, (_, i) => `rounded-${i + 1}`),
    ...Array.from({ length: 50 }, (_, i) => `rounded-${i + 1}%`),
    ...[
        'search',
        "edit",
        "check",
        "message",
        "star-off",
        "delete",
        "add",
        "share",].map((v) => `i-ic-baseline-${v}`)
]

export default () =>
    Unocss({
        safelist,
        presets: [
            presetUno(),
            presetAttributify(),
            presetIcons()
        ],
    })