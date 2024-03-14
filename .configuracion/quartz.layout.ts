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
    left: [
        Component.PageTitle(),

        Component.MobileOnly(Component.Spacer()),
        Component.MobileOnly(Component.Darkmode()),

        Component.Search(),

        Component.DesktopOnly(Component.Explorer()),
        Component.DesktopOnly(Component.Spacer()),
    ],
    beforeBody: [
        Component.ArticleTitle(),
        Component.Spacer(),
        Component.Breadcrumbs(),
    ],
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
    right: [
        Component.DesktopOnly(Component.TableOfContents()),
        Component.Backlinks(),
        Component.DesktopOnly(Component.Spacer()),
    ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
    right: [],
}


