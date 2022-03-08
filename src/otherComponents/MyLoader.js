import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => <div className="pizza-block">
    <ContentLoader
        speed={2}
        width={280}
        height={457}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="140" cy="130" r="130" />
        <rect x="113" y="116" rx="0" ry="0" width="1" height="75" />
        <rect x="90" y="160" rx="0" ry="0" width="24" height="31" />
        <rect x="120" y="65" rx="0" ry="0" width="66" height="7" />
        <rect x="0" y="277" rx="3" ry="3" width="280" height="24" />
        <rect x="0" y="314" rx="6" ry="6" width="280" height="84" />
        <rect x="127" y="412" rx="20" ry="20" width="150" height="44" />
        <rect x="0" y="429" rx="0" ry="0" width="90" height="27" />
    </ContentLoader>
</div>

export default MyLoader
