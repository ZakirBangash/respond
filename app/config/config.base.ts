import { TABS_ROUTES } from "@/routes/tabs/routes.types"

export interface ConfigBaseProps {
  catchErrors: "always" | "dev" | "prod" | "never"
  exitRoutes: string[]
}

const BaseConfig: ConfigBaseProps = {
  /**
   * Only enable if we're catching errors in the right environment
   */
  catchErrors: "always",

  /**
   * This is a list of all the route names that will exit the app if the back button
   * is pressed while in that screen. Only affects Android.
   */
  exitRoutes: [TABS_ROUTES.CHATS],
}

export default BaseConfig
