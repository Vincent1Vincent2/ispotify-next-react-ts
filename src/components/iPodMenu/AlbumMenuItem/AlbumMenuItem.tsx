import "../styles.css";

export default function AlbumMenuItem() {
  return (
    <svg
      className="MenuItem"
      width="280"
      height="135"
      viewBox="-5 0 280 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="AlbumMenuItem">
        <rect
          className="ItemBase"
          width="275"
          height="26"
          fill="white"
          fillOpacity="0.01"
        />
        <path
          className="ChevronRight"
          d="M264.059 14.0566L264.081 14.0349L264.09 14.0266L264.617 13.5001L260.365 9.24826L260.249 9.36387L263.621 12.7358C264.043 13.1576 264.043 13.8415 263.621 14.2633L260.248 17.6361L260.364 17.7517L264.059 14.0566ZM265.04 13.9239L265.04 13.9234C265.04 13.9236 265.04 13.9237 265.04 13.9239L265.464 13.5001L265.04 13.9239Z"
          fill="#171717"
          stroke="black"
          strokeWidth="2"
        />

        <path
          className="MenuText"
          d="M13.2588 8.95459L10.2192 18H8.08789L12.0723 7.33594H13.4346L13.2588 8.95459ZM15.8003 18L12.7461 8.95459L12.563 7.33594H13.9326L17.939 18H15.8003ZM15.6611 14.0376V15.627H9.94092V14.0376H15.6611ZM20.9419 6.75V18H19.001V6.75H20.9419ZM22.7803 6.75H24.7212V16.2495L24.5308 18H22.7803V6.75ZM29.8188 13.957V14.1108C29.8188 14.7017 29.7529 15.2437 29.6211 15.7368C29.4941 16.23 29.3013 16.6572 29.0425 17.0186C28.7837 17.375 28.4614 17.6533 28.0757 17.8535C27.6948 18.0488 27.248 18.1465 26.7354 18.1465C26.2471 18.1465 25.8223 18.0513 25.4609 17.8608C25.1045 17.6704 24.8042 17.4019 24.5601 17.0552C24.3159 16.7036 24.1206 16.291 23.9741 15.8174C23.8276 15.3389 23.7178 14.8164 23.6445 14.25V13.8325C23.7178 13.2612 23.8276 12.7388 23.9741 12.2651C24.1206 11.7915 24.3159 11.3789 24.5601 11.0273C24.8042 10.6758 25.1045 10.4048 25.4609 10.2144C25.8174 10.0239 26.2373 9.92871 26.7207 9.92871C27.2383 9.92871 27.6899 10.0288 28.0757 10.229C28.4663 10.4243 28.7886 10.7026 29.0425 11.064C29.3013 11.4204 29.4941 11.8452 29.6211 12.3384C29.7529 12.8267 29.8188 13.3662 29.8188 13.957ZM27.8779 14.1108V13.957C27.8779 13.6201 27.8511 13.3027 27.7974 13.0049C27.7437 12.7021 27.6558 12.436 27.5337 12.2065C27.4116 11.9771 27.2456 11.7964 27.0356 11.6646C26.8257 11.5327 26.562 11.4668 26.2446 11.4668C25.9419 11.4668 25.6831 11.5181 25.4683 11.6206C25.2583 11.7231 25.0825 11.8647 24.9409 12.0454C24.8042 12.2261 24.6968 12.4385 24.6187 12.6826C24.5454 12.9268 24.4966 13.1904 24.4722 13.4736V14.6162C24.5063 14.9922 24.5869 15.3315 24.7139 15.6343C24.8408 15.9321 25.0288 16.1689 25.2778 16.3447C25.5317 16.5205 25.8589 16.6084 26.2593 16.6084C26.5718 16.6084 26.833 16.5474 27.043 16.4253C27.2529 16.2983 27.4189 16.1226 27.541 15.8979C27.6631 15.6685 27.7485 15.4023 27.7974 15.0996C27.8511 14.7969 27.8779 14.4673 27.8779 14.1108ZM35.9419 16.1177V10.0752H37.8901V18H36.0591L35.9419 16.1177ZM36.1909 14.4771L36.7915 14.4624C36.7915 14.9946 36.7329 15.4854 36.6157 15.9346C36.4985 16.3838 36.3154 16.7744 36.0664 17.1064C35.8223 17.4336 35.5122 17.6899 35.1362 17.8755C34.7603 18.0562 34.3159 18.1465 33.8032 18.1465C33.4126 18.1465 33.0562 18.0928 32.7339 17.9854C32.4116 17.873 32.1333 17.6997 31.8989 17.4653C31.6694 17.2261 31.4912 16.9209 31.3643 16.5498C31.2373 16.1738 31.1738 15.7222 31.1738 15.1948V10.0752H33.1074V15.2095C33.1074 15.4731 33.1367 15.6929 33.1953 15.8687C33.2588 16.0444 33.3442 16.1885 33.4517 16.3008C33.564 16.4082 33.6934 16.4863 33.8398 16.5352C33.9912 16.5791 34.1523 16.6011 34.3232 16.6011C34.792 16.6011 35.1606 16.5083 35.4292 16.3228C35.7026 16.1323 35.8979 15.8784 36.0151 15.561C36.1323 15.2388 36.1909 14.8774 36.1909 14.4771ZM41.5303 11.7012V18H39.5967V10.0752H41.4204L41.5303 11.7012ZM41.2446 13.752H40.6514C40.6514 13.2002 40.7173 12.6924 40.8491 12.2285C40.9858 11.7646 41.186 11.3618 41.4497 11.02C41.7134 10.6733 42.0381 10.4048 42.4238 10.2144C42.8145 10.0239 43.2661 9.92871 43.7788 9.92871C44.1353 9.92871 44.4624 9.98242 44.7603 10.0898C45.0581 10.1924 45.3145 10.356 45.5293 10.5806C45.749 10.8003 45.9175 11.0884 46.0347 11.4448C46.1519 11.7964 46.2104 12.2188 46.2104 12.7119V18H44.2769V12.9097C44.2769 12.5386 44.2231 12.248 44.1157 12.0381C44.0132 11.8281 43.8643 11.6816 43.6689 11.5986C43.4736 11.5107 43.2393 11.4668 42.9658 11.4668C42.6631 11.4668 42.4019 11.5278 42.1821 11.6499C41.9673 11.7671 41.7891 11.9307 41.6475 12.1406C41.5107 12.3506 41.4082 12.5923 41.3398 12.8657C41.2764 13.1392 41.2446 13.4346 41.2446 13.752ZM46.064 13.3931L45.2656 13.5396C45.2705 13.0415 45.3389 12.5752 45.4707 12.1406C45.6025 11.7012 45.7954 11.3179 46.0493 10.9907C46.3081 10.6587 46.6279 10.3999 47.0088 10.2144C47.3945 10.0239 47.8389 9.92871 48.3418 9.92871C48.7324 9.92871 49.084 9.98486 49.3965 10.0972C49.7139 10.2046 49.9849 10.3779 50.2095 10.6172C50.4341 10.8516 50.605 11.1567 50.7222 11.5327C50.8442 11.9087 50.9053 12.3677 50.9053 12.9097V18H48.957V12.9023C48.957 12.5166 48.9033 12.2212 48.7959 12.0161C48.6934 11.811 48.5444 11.6694 48.3491 11.5913C48.1538 11.5083 47.9243 11.4668 47.6606 11.4668C47.3921 11.4668 47.1577 11.5181 46.9575 11.6206C46.7622 11.7183 46.5962 11.855 46.4595 12.0308C46.3276 12.2065 46.2275 12.4116 46.1592 12.646C46.0957 12.8755 46.064 13.1245 46.064 13.3931ZM56.999 15.832C56.999 15.666 56.9551 15.5171 56.8672 15.3853C56.7793 15.2534 56.6133 15.1338 56.3691 15.0264C56.1299 14.9141 55.7783 14.8091 55.3145 14.7114C54.9043 14.6235 54.5259 14.5137 54.1792 14.3818C53.8325 14.25 53.5347 14.0913 53.2856 13.9058C53.0366 13.7153 52.8413 13.4932 52.6997 13.2393C52.563 12.9805 52.4946 12.6826 52.4946 12.3457C52.4946 12.0186 52.5654 11.7109 52.707 11.4229C52.8486 11.1299 53.0537 10.8735 53.3223 10.6538C53.5908 10.4292 53.918 10.2534 54.3037 10.1265C54.6895 9.99463 55.124 9.92871 55.6074 9.92871C56.2812 9.92871 56.8599 10.0386 57.3433 10.2583C57.8315 10.478 58.2051 10.7808 58.4639 11.1665C58.7227 11.5474 58.8521 11.9771 58.8521 12.4556H56.9185C56.9185 12.2456 56.8696 12.0552 56.772 11.8843C56.6792 11.7134 56.5352 11.5767 56.3398 11.4741C56.1445 11.3667 55.8979 11.313 55.6001 11.313C55.3315 11.313 55.1045 11.3569 54.9189 11.4448C54.7383 11.5327 54.6016 11.6475 54.5088 11.7891C54.416 11.9307 54.3696 12.0869 54.3696 12.2578C54.3696 12.3848 54.394 12.4995 54.4429 12.6021C54.4966 12.6997 54.582 12.79 54.6992 12.873C54.8164 12.9561 54.9751 13.0317 55.1753 13.1001C55.3804 13.1685 55.6318 13.2344 55.9297 13.2979C56.5205 13.415 57.0356 13.5713 57.4751 13.7666C57.9194 13.957 58.2661 14.2109 58.5151 14.5283C58.7642 14.8457 58.8887 15.251 58.8887 15.7441C58.8887 16.0957 58.813 16.418 58.6616 16.7109C58.5103 16.999 58.2905 17.2505 58.0024 17.4653C57.7144 17.6802 57.3701 17.8486 56.9697 17.9707C56.5693 18.0879 56.1177 18.1465 55.6147 18.1465C54.8872 18.1465 54.272 18.0171 53.769 17.7583C53.2661 17.4946 52.8853 17.1626 52.6265 16.7622C52.3677 16.3569 52.2383 15.937 52.2383 15.5024H54.0913C54.106 15.8101 54.189 16.0566 54.3403 16.2422C54.4917 16.4277 54.6821 16.562 54.9116 16.645C55.146 16.7231 55.3926 16.7622 55.6514 16.7622C55.9443 16.7622 56.1909 16.7231 56.3911 16.645C56.5913 16.562 56.7427 16.4521 56.8452 16.3154C56.9478 16.1738 56.999 16.0127 56.999 15.832Z"
          fill="#171717"
        />
      </g>
    </svg>
  );
}
