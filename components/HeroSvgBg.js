export default function HeroSvgBg({ variant = "home" }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {variant === "home" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1920 1085"
          className="absolute -top-10 -right-44 w-[1150px] max-w-none h-auto opacity-70 pointer-events-none"
          preserveAspectRatio="xMaxYMin meet"
        >
          <defs>
            <path id="a" d="M0 0h1920v1085H0z" />
            <linearGradient id="b" x1="-.082%" x2="119.592%" y1="70.484%" y2="48.46%">
              <stop offset="0%" stopColor="#FFF" />
              <stop offset="100%" stopColor="#F2F2F2" />
            </linearGradient>
            <linearGradient id="d" x1="-35.177%" x2="156.068%" y1="40.225%" y2="87.696%">
              <stop offset="0%" stopColor="#FFF" />
              <stop offset="100%" stopColor="#0057FF" stopOpacity=".12" />
            </linearGradient>
            <linearGradient id="e" x1="6.158%" x2="78.218%" y1="25.355%" y2="63.324%">
              <stop offset="0%" stopColor="#FFF" />
              <stop offset="100%" stopColor="#EBEBEB" />
            </linearGradient>
            <linearGradient id="f" x1="85.1%" x2="113.145%" y1="63.296%" y2="62.522%">
              <stop offset="0%" stopColor="#F8F8F8" />
              <stop offset="100%" stopColor="#FFF" />
            </linearGradient>
            <linearGradient id="g" x1="49.827%" x2="49.827%" y1="75.41%" y2="100%">
              <stop offset="0%" stopColor="#FFF" stopOpacity="0" />
              <stop offset="64%" stopColor="#FFF" stopOpacity=".919" />
              <stop offset="100%" stopColor="#FFF" />
            </linearGradient>
          </defs>
          <g fill="none" fillRule="evenodd">
            <mask id="c" fill="#fff">
              <use xlinkHref="#a" />
            </mask>

            <g stroke="#0057FF" mask="url(#c)" opacity=".18">
              <path d="M690.678-73.691s11.878 217.156 577.846 275.716c468.754 48.5-163.961 904.746-163.961 904.746" />
              <path d="M707.39-71.537s1.62 223.195 556.254 288.278c284.858 33.427 175.377 347.71 44.905 597.544-82.773 158.604-175.623 286.652-176.225 291.484" />
              <path d="M724.103-69.385s-8.602 229.378 534.661 300.836c283.001 37.224 189.434 333.812 69.123 580.19-76.286 156.443-166.6 283.456-167.805 293.12" />
              <path d="M740.816-67.23s-18.786 235.713 513.071 313.394c281.178 41.069 203.491 319.913 93.343 562.838-69.798 154.28-157.58 280.258-159.387 294.758" />
              <path d="M757.529-65.076s-28.935 242.205 491.478 325.952c279.388 44.962 217.551 306.016 117.563 545.484-63.31 152.12-148.557 277.063-150.966 296.393" />
              <path strokeWidth="1.039" d="M774.242-62.921s-39.06 248.856 469.885 338.51c277.626 48.907 231.608 292.12 141.784 528.13-56.822 149.957-139.534 273.867-142.546 298.03" />
              <path strokeWidth="1.107" d="M790.954-60.767s-49.157 255.673 448.293 351.07c275.892 52.907 245.668 278.22 166.004 510.774-50.337 147.798-130.51 270.669-134.127 299.667" />
              <path strokeWidth="1.174" d="M807.664-58.612s-59.234 262.66 426.7 363.627c274.186 56.968 259.726 264.322 190.225 493.424-43.85 145.634-121.491 267.473-125.707 301.3" />
              <path strokeWidth="1.242" d="M824.377-56.457s-69.302 269.82 405.108 376.188c272.496 61.095 273.782 250.423 214.441 476.069-37.361 143.474-112.467 264.277-117.286 302.937" />
              <path strokeWidth="1.31" d="M841.09-54.303s-79.36 277.155 383.518 388.747c270.829 65.292 287.841 236.527 238.661 458.715-30.873 141.31-103.444 261.079-108.868 304.574" />
              <path strokeWidth="1.377" d="M857.802-52.148s-89.412 284.665 361.926 401.304c269.173 69.563 301.899 222.63 262.882 441.361-24.386 139.151-94.422 257.884-100.447 306.211" />
              <path strokeWidth="1.445" d="M874.515-49.994S775.04 242.364 1214.848 363.87c267.53 73.909 315.958 208.73 287.102 424.01-17.898 136.987-85.401 254.687-92.026 307.845" />
              <path strokeWidth="1.513" d="M891.228-47.84s-109.546 300.232 318.74 426.422c265.888 78.34 330.016 194.832 311.322 406.655-11.41 134.828-76.378 251.492-83.608 309.482" />
              <path strokeWidth="1.581" d="M907.94-45.684s-119.636 308.287 297.148 438.979c264.246 82.86 344.073 180.936 335.54 389.3-4.922 132.665-67.355 248.295-75.188 311.12" />
              <path strokeWidth="1.648" d="M924.653-43.53S794.9 272.995 1200.208 408.008c262.596 87.474 357.718 167.04 359.76 371.946 1.303 130.504-58.332 245.099-66.766 312.753" />
              <path strokeWidth="1.716" d="M941.366-41.378s-139.91 324.945 253.965 464.096c260.932 92.183 371.767 153.164 383.98 354.592 7.783 128.358-49.311 241.903-58.348 314.39" />
              <path strokeWidth="1.784" d="M958.076-39.223s-150.104 333.546 232.372 476.657c259.246 97.001 385.821 139.288 408.201 337.24 14.267 126.212-40.289 238.705-49.928 316.027" />
              <path strokeWidth="1.852" d="M974.788-37.069s-160.353 342.325 210.78 489.215c257.526 101.927 399.884 125.415 432.421 319.886 20.758 124.063-31.265 235.51-41.507 317.664" />
              <path strokeWidth="1.919" d="M991.501-34.914S820.84 316.362 1180.69 466.859c255.769 106.97 413.948 111.539 456.64 302.532 27.252 121.917-22.242 232.314-33.086 319.298" />
              <path strokeWidth="1.987" d="M1008.214-32.76S827.17 327.638 1175.809 481.572c253.96 112.129 428.022 97.66 480.858 285.177 33.748 119.768-13.222 229.116-24.668 320.935" />
              <path strokeWidth="2.055" d="M1024.927-30.605S833.42 339.08 1170.929 496.285c252.09 117.417 442.1 83.78 505.079 267.826 40.246 117.616-4.2 225.92-16.248 322.572" />
              <path strokeWidth="2.123" d="M1041.64-28.45S839.58 350.68 1166.051 510.998c250.147 122.837 456.54 69.753 529.299 250.471 46.978 115.372 4.824 222.724-7.827 324.21" />
              <path strokeWidth="2.19" d="M1058.352-26.296s-212.713 388.73 102.82 552.007c248.116 128.392 470.597 55.854 553.519 233.117 53.466 113.209 13.844 219.526.591 325.843" />
              <path strokeWidth="2.258" d="M1075.065-24.141s-223.479 398.47 81.227 564.567c245.987 134.09 484.654 41.956 577.74 215.763 59.953 111.049 22.867 216.33 9.011 327.48" />
              <path strokeWidth="2.326" d="M1091.777-21.987S857.41 386.355 1151.412 555.14c243.743 139.93 498.714 28.058 601.96 198.411 66.442 108.886 31.89 213.135 17.432 329.117" />
              <path strokeWidth="2.393" d="M1108.49-19.832s-245.39 418.337 38.042 589.684c241.368 145.917 512.771 14.162 626.177 181.057 72.93 106.725 40.914 209.936 25.85 330.75" />
              <path strokeWidth="2.461" d="M1125.2-17.677s-256.557 428.438 16.45 602.242c238.846 152.056 526.83.263 650.397 163.702 79.417 104.563 49.933 206.741 34.271 332.388" />
              <path strokeWidth="2.529" d="M1141.913-15.523s-267.877 438.635-5.14 614.8c236.16 158.347 540.887-13.635 674.617 146.349 85.903 102.402 58.957 203.545 42.692 334.025" />
              <path strokeWidth="2.597" d="M1158.625-13.368S879.26 435.545 1131.892 613.99c233.295 164.788 554.945-27.534 698.838 128.993 92.39 100.24 67.98 200.348 51.11 335.662" />
              <path strokeWidth="2.664" d="M1175.338-11.216S884.311 448.036 1127.012 628.7c230.224 171.377 569.005-41.43 723.059 111.642 98.878 98.079 77.002 197.152 59.53 337.296" />
              <path strokeWidth="2.732" d="M1192.05-9.062s-302.878 469.637-69.918 652.478c226.939 178.116 583.063-55.328 747.276 94.288 105.366 95.916 86.023 193.956 67.952 338.933" />
              <path strokeWidth="2.8" d="M1208.763-6.907s-314.924 480.045-91.51 665.036c223.414 184.991 597.121-69.227 771.496 76.934 111.854 93.756 95.046 190.758 76.37 340.57" />
            </g>
          </g>
        </svg>
      ) : variant === "services" ? (
        /* Custom 3D Isometric Architecture Grid Background for Services Page */
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1500 900"
          className="absolute -top-12 -right-44 w-[1200px] max-w-none h-auto opacity-75 pointer-events-none"
          preserveAspectRatio="xMaxYMin meet"
        >
          <defs>
            <linearGradient id="servIsoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0057FF" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#00A3FF" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#00D4A6" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="servPolyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0057FF" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#00D4A6" stopOpacity="0.04" />
            </linearGradient>
          </defs>

          {/* 3D Isometric Tier Platforms */}
          <g fill="url(#servPolyGrad)" stroke="url(#servIsoGrad)" strokeWidth="1.5">
            <polygon points="1000,60 1250,180 1000,300 750,180" />
            <polygon points="1100,200 1350,320 1100,440 850,320" />
            <polygon points="900,320 1150,440 900,560 650,440" />
          </g>

          {/* Connecting Vertical & Horizontal Data Flow Lines */}
          <g fill="none" stroke="url(#servIsoGrad)" strokeWidth="1.5">
            <line x1="1000" y1="180" x2="1100" y2="320" strokeDasharray="6 6" />
            <line x1="1100" y1="320" x2="900" y2="440" />
            <line x1="1000" y1="60" x2="1000" y2="300" strokeDasharray="4 4" />
            <line x1="1100" y1="200" x2="1100" y2="440" strokeDasharray="4 4" />
            <line x1="900" y1="320" x2="900" y2="560" strokeDasharray="4 4" />

            {/* Sweeping Isometric Outflow Rays */}
            {[
              "M 750 180 C 600 240, 450 320, 200 450",
              "M 780 195 C 630 255, 480 335, 230 465",
              "M 810 210 C 660 270, 510 350, 260 480",
              "M 840 225 C 690 285, 540 365, 290 495",
              "M 870 240 C 720 300, 570 380, 320 510",
              "M 900 255 C 750 315, 600 395, 350 525",
            ].map((d, i) => (
              <path key={i} d={d} strokeWidth={1 + i * 0.1} />
            ))}
          </g>

          {/* Glowing Service Hub Nodes */}
          <g>
            <circle cx="1000" cy="180" r="6" fill="#0057FF" />
            <circle cx="1000" cy="180" r="12" fill="none" stroke="#0057FF" strokeWidth="1.5" opacity="0.5" />
            
            <circle cx="1100" cy="320" r="6" fill="#00A3FF" />
            <circle cx="1100" cy="320" r="12" fill="none" stroke="#00A3FF" strokeWidth="1.5" opacity="0.5" />
            
            <circle cx="900" cy="440" r="6" fill="#00D4A6" />
            <circle cx="900" cy="440" r="12" fill="none" stroke="#00D4A6" strokeWidth="1.5" opacity="0.5" />
          </g>
        </svg>
      ) : variant === "portfolio" ? (
        /* Custom Geometric Vector Background for Work / Portfolio Page */
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1400 800"
          className="absolute -top-10 -right-44 w-[1100px] max-w-none h-auto opacity-70 pointer-events-none"
          preserveAspectRatio="xMaxYMin meet"
        >
          <defs>
            <linearGradient id="portGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00A3FF" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#0057FF" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#00D4A6" stopOpacity="0.15" />
            </linearGradient>
          </defs>

          {/* Sweeping Geometric Waves */}
          <g fill="none" stroke="url(#portGrad1)">
            {[
              "M 250 600 C 600 450, 800 150, 1300 -50",
              "M 280 610 C 620 455, 820 155, 1320 -50",
              "M 310 620 C 640 460, 840 160, 1340 -50",
              "M 340 630 C 660 465, 860 165, 1360 -50",
              "M 370 640 C 680 470, 880 170, 1380 -50",
              "M 400 650 C 700 475, 900 175, 1400 -50",
              "M 430 660 C 720 480, 920 180, 1420 -50",
              "M 460 670 C 740 485, 940 185, 1440 -50",
              "M 490 680 C 760 490, 960 190, 1460 -50",
              "M 520 690 C 780 495, 980 195, 1480 -50",
              "M 550 700 C 800 500, 1000 200, 1500 -50",
            ].map((d, i) => (
              <path key={i} strokeWidth={1 + i * 0.1} d={d} />
            ))}
          </g>

          {/* Floating Polygon Mesh Accents */}
          <g fill="none" stroke="#0077FF" strokeWidth="1.2" opacity="0.3">
            <polygon points="750,120 900,180 820,320 680,260" />
            <polygon points="920,80 1060,160 980,280 840,200" />
            <line x1="900" y1="180" x2="980" y2="280" strokeDasharray="4 4" />
            <circle cx="900" cy="180" r="4" fill="#0057FF" />
            <circle cx="980" cy="280" r="4" fill="#00D4A6" />
          </g>
        </svg>
      ) : variant === "about" ? (
        /* Custom Wavy Contour Lines Background for About Page */
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 900"
          className="absolute -top-12 -right-56 w-[1350px] max-w-none h-auto opacity-75 pointer-events-none"
          preserveAspectRatio="xMaxYMin meet"
        >
          <defs>
            <linearGradient id="aboutWaveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0057FF" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#00A3FF" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#00D4A6" stopOpacity="0.15" />
            </linearGradient>
          </defs>

          {/* Multi-layered Sweeping Wavy Contour Lines */}
          <g fill="none" stroke="url(#aboutWaveGrad)">
            {[
              "M 200 -80 C 500 120, 750 350, 1400 500",
              "M 230 -80 C 520 130, 770 360, 1420 510",
              "M 260 -80 C 540 140, 790 370, 1440 520",
              "M 290 -80 C 560 150, 810 380, 1460 530",
              "M 320 -80 C 580 160, 830 390, 1480 540",
              "M 350 -80 C 600 170, 850 400, 1500 550",
              "M 380 -80 C 620 180, 870 410, 1520 560",
              "M 410 -80 C 640 190, 890 420, 1540 570",
              "M 440 -80 C 660 200, 910 430, 1560 580",
              "M 470 -80 C 680 210, 930 440, 1580 590",
              "M 500 -80 C 700 220, 950 450, 1600 600",
              "M 530 -80 C 720 230, 970 460, 1620 610",
              "M 560 -80 C 740 240, 990 470, 1640 620",
              "M 590 -80 C 760 250, 1010 480, 1660 630",
              "M 620 -80 C 780 260, 1030 490, 1680 640",
              "M 650 -80 C 800 270, 1050 500, 1700 650",
              "M 680 -80 C 820 280, 1070 510, 1720 660",
              "M 710 -80 C 840 290, 1090 520, 1740 670",
              "M 740 -80 C 860 300, 1110 530, 1760 680",
              "M 770 -80 C 880 310, 1130 540, 1780 690",
            ].map((d, i) => (
              <path key={i} strokeWidth={1 + i * 0.08} strokeDasharray={i % 4 === 3 ? "6 6" : "none"} d={d} />
            ))}
          </g>
        </svg>
      ) : variant === "contact" ? (
        /* Custom Target Beacon & Radar Waves Background for Contact Page */
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1400 800"
          className="absolute -top-10 -right-44 w-[1100px] max-w-none h-auto opacity-70 pointer-events-none"
          preserveAspectRatio="xMaxYMin meet"
        >
          <defs>
            <radialGradient id="contactGrad1" cx="80%" cy="20%" r="60%">
              <stop offset="0%" stopColor="#00D4A6" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#0057FF" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#0077FF" stopOpacity="0" />
            </radialGradient>
          </defs>

          <rect width="100%" height="100%" fill="url(#contactGrad1)" />

          {/* Radar Radar Waves */}
          <g fill="none" stroke="#0057FF" strokeWidth="1.2" opacity="0.25">
            {[180, 260, 340, 420, 500, 580].map((r, i) => (
              <circle key={i} cx="1120" cy="160" r={r} strokeDasharray={i % 2 === 0 ? "none" : "6 6"} />
            ))}
            <line x1="1120" y1="160" x2="300" y2="500" />
            <line x1="1120" y1="160" x2="500" y2="650" strokeDasharray="4 4" />
            <circle cx="1120" cy="160" r="7" fill="#0057FF" />
            <circle cx="300" cy="500" r="5" fill="#00D4A6" />
          </g>
        </svg>
      ) : (
        /* Soft Ambient Brand Glow Spot & Grid for fallback */
        <>
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-gradient-to-r from-blue-500/10 via-sky-400/10 to-teal-400/10 blur-3xl" />
          <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="simpleGrid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#CBD5E1" strokeWidth="0.8" strokeDasharray="3 3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#simpleGrid)" />
          </svg>
        </>
      )}
    </div>
  );
}
