import { helloStatic } from "./helperStatic.js";

function test() {
    // static import
    helloStatic();

    // standard dynamic import
    import(/* webpackChunkName: "helperDynamic" */ "./helperDynamic").then(({ helloDynamic }) => {
        helloDynamic();
    });
}

// prefetched dynamic import
export async function prefetch() {
    const { helloPrefetch } = await import(/* webpackPrefetch: true, webpackChunkName: "helperPrefetch" */"./helperPrefetch");
    helloPrefetch();
}

// preloaded dynamic import
export async function preload() {
    const { helloPreload } = await import(/* webpackPreload: true, webpackChunkName: "helperPreload" */"./helperPreload");
    helloPreload();
}

test();
