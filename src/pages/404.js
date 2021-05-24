import * as React from "react"

import Seo from "../components/seo"

const NotFoundPage = () => (
  <div>
    <Seo title="404: Not found" description="Ooops, must be lost." />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
)

export default NotFoundPage
