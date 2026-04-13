"use client"

interface AdBannerProps {
  position: "header" | "content"
}

export function AdBanner({ position }: AdBannerProps) {
  if (position === "header") {
    return (
      <div className="w-full bg-muted/30 border-b border-border/30">
        <div className="container mx-auto px-4 py-2">
          {/* Google AdSense Header Banner Placeholder
              Replace this div with your AdSense code after approval.
              Recommended sizes: 728x90 (desktop), 320x50 (mobile)
          */}
          <div className="h-[50px] sm:h-[90px] flex items-center justify-center text-muted-foreground">
            {/* 
              <ins className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                data-ad-slot="XXXXXXXXXX"
                data-ad-format="horizontal"
                data-full-width-responsive="true">
              </ins>
              <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
              </script>
            */}
            <div className="px-4 py-2 rounded-lg bg-muted/30 border border-dashed border-border/50">
              <span className="text-[10px] text-muted-foreground/60">Advertisement</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-sm mx-auto mt-8 mb-4">
      {/* Google AdSense Content Banner Placeholder
          Replace this div with your AdSense code after approval.
          Recommended size: 300x250 (Medium Rectangle)
      */}
      <div className="h-[100px] sm:h-[120px] rounded-2xl bg-muted/30 border border-dashed border-border/50 flex flex-col items-center justify-center text-muted-foreground">
        {/* 
          <ins className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            data-ad-slot="XXXXXXXXXX"
            data-ad-format="rectangle"
            data-full-width-responsive="true">
          </ins>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        */}
        <span className="text-[10px] text-muted-foreground/60">Advertisement</span>
      </div>
    </div>
  )
}
