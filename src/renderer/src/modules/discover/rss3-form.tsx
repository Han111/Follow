import { useAuthQuery } from "@renderer/hooks/common"
import { Queries } from "@renderer/queries"

import { DiscoverFeedForm } from "./content-components"

export function DiscoverRSS3() {
  const { data } = useAuthQuery(
    Queries.discover.rsshubNamespace({
      namespace: "rss3",
    }),
  )

  return (
    <>
      {data?.rss3.routes && (
        <div className="w-[512px]">
          <DiscoverFeedForm
            routePrefix="rss3"
            route={data.rss3.routes[Object.keys(data.rss3.routes)[0]]}
            noDescription
            submitButtonClassName="justify-center"
          />
        </div>
      )}
    </>
  )
}