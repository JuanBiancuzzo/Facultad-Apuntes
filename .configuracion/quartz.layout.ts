import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
    head: Component.Head(),
    header: [],
    footer: Component.Footer({
        text: "Links",
        links: {
            GitHub: "https://github.com/JuanBiancuzzo/Facultad-Apuntes",
        },
    }),
    beforeBody: [
        Component.Search(),
        Component.Spacer(),
        Component.ArticleTitle(),
        Component.Spacer(),
        Component.Breadcrumbs(),
    ],
    left: [
        Component.PageTitle(),
        Component.MobileOnly(Component.Spacer()),
        Component.Darkmode(),
        Component.DesktopOnly(Component.Explorer()),
    ],
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
    right: [
        Component.Backlinks(),
    ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
    right: [],
}
