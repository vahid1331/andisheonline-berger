import animate from "tailwindcss-animate";
export default {
  content: ["./index.html","./src/**/*.{js,jsx}","./kits/shadcn/src/**/*.{js,jsx}"],
  theme: { extend: {
    colors: Object.fromEntries(
      ["background","foreground","border","input","ring"].map(name=>[name,`var(--${name})`]).concat(
        ["card","popover","primary","secondary","muted","accent","destructive"].map(name=>[name,{DEFAULT:`var(--${name})`,foreground:`var(--${name}-foreground)`}])
      )
    ),
    borderRadius:{lg:"var(--radius)",md:"calc(var(--radius) - 2px)",sm:"calc(var(--radius) - 4px)"}
  } },
  plugins: [animate]
};
