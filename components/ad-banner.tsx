"use client"

interface AdBannerProps {
  position: "header" | "content"
}

export function AdBanner({ position }: AdBannerProps) {
  if (position === "header") {
    return (
      <div className="w-full bg-muted/50 border-b border-border/50">
        <div className="container mx-auto px-4">
          {/* Google AdSense Header Banner Placeholder */}
          <div className="h-[50px] sm:h-[90px] flex items-center justify-center text-muted-foreground text-xs">
            {/* Replace this div with your AdSense code */}
            {/* 
              <ins className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                data-ad-slot="XXXXXXXXXX"
                data-ad-format="auto"
                data-full-width-responsive="true">
              </ins>
            */}
            <span className="px-4 py-2 rounded-lg bg-muted/50 text-[10px]">
              Ad Space - 728x90
            </span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-sm mx-auto mt-8">
      {/* Google AdSense Content Banner Placeholder */}
      <div className="h-[100px] sm:h-[120px] rounded-2xl bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground text-xs">
        {/* Replace this div with your AdSense code */}
        {/* 
          <ins className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            data-ad-slot="XXXXXXXXXX"
            data-ad-format="auto"
            data-full-width-responsive="true">
          </ins>
        */}
        <span className="px-4 py-2 rounded-lg bg-muted/50 text-[10px]">
          Ad Space - 300x250
        </span>
      </div>
    </div>
  )
}
