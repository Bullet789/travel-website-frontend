import React from "react";
import styles from "./Header.module.scss";


const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <svg
          width="112"
          height="32"
          viewBox="0 0 112 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2590_26221)">
            <path
              d="M5.22178 6.45C3.26852 8.41149 3.26852 11.6046 5.22178 13.566L18.9479 27.3501C19.4387 27.8429 20.2367 27.8429 20.7275 27.3501C21.2153 26.8601 21.2153 26.0679 20.7274 25.578L6.99387 11.7876C6.01669 10.8063 6.01669 9.21086 6.99387 8.22956C7.97105 7.24827 9.55978 7.24827 10.537 8.22956L24.2631 22.0136C24.7539 22.5064 25.5519 22.5064 26.0427 22.0136C26.5305 21.5236 26.5305 20.7314 26.0427 20.2415L12.309 6.45C10.3547 4.48851 7.17613 4.48851 5.22178 6.45Z"
              fill="url(#paint0_linear_2590_26221)"
            />
            <path
              d="M31.7966 3.78174C28.3776 0.348307 22.8143 0.348307 19.3952 3.78174C18.1737 5.00845 16.1877 5.00845 14.9661 3.78174C11.5471 0.348307 5.98377 0.348307 2.56475 3.78174C-0.854267 7.21517 -0.854267 12.8019 2.56475 16.2354L16.2909 30.0194C16.7817 30.5123 17.5796 30.5123 18.0704 30.0194C18.5583 29.5294 18.5583 28.7372 18.0704 28.2473L4.33575 14.4558C1.8939 12.0037 1.8939 8.01233 4.33575 5.5602C6.77759 3.10806 10.7522 3.10806 13.194 5.5602L23.8244 16.2354C26.0234 18.4437 29.5986 18.4437 31.7977 16.2354C35.2167 12.8019 35.2167 7.21517 31.7966 3.78174ZM26.4452 9.15571C25.9555 8.66396 25.1628 8.66396 24.6731 9.15571L22.9407 10.8954C22.6953 11.1418 22.2964 11.1418 22.051 10.8954C21.807 10.6504 21.807 10.2543 22.051 10.0093L23.8244 8.22844C24.8015 7.24714 26.3903 7.24714 27.3675 8.22844C28.3446 9.20973 28.3446 10.8052 27.3675 11.7865L25.5978 13.5636C25.3524 13.81 24.9534 13.81 24.708 13.5636C24.4641 13.3186 24.4641 12.9225 24.708 12.6776L26.4441 10.9342C26.9338 10.4435 26.9338 9.64746 26.4452 9.15571ZM28.2559 16.2329C28.0105 16.4794 27.6115 16.4794 27.3661 16.2329C27.1222 15.988 27.1222 15.5919 27.3661 15.3469L29.1396 13.566C31.0928 11.6045 31.0928 8.41147 29.1396 6.44998C27.1863 4.48849 24.0066 4.48849 22.0534 6.44998L20.2837 8.22712C20.0383 8.47355 19.6393 8.47355 19.3939 8.22712C19.15 7.98215 19.15 7.58605 19.3939 7.34108L21.1673 5.5602C23.6092 3.10806 27.5838 3.10806 30.0256 5.5602C32.4674 8.01233 32.4674 12.0037 30.0256 14.4558L28.2559 16.2329Z"
              fill="url(#paint1_linear_2590_26221)"
            />
            <path
              d="M21.8288 29.7811C21.5049 29.9626 21.4459 30.4061 21.711 30.6667C21.8538 30.8071 22.0608 30.8596 22.2528 30.8039L23.6003 30.4134C23.8053 30.3539 24.0264 30.4099 24.1789 30.5599C24.3077 30.6865 24.4989 30.6845 24.6249 30.555C24.7058 30.472 24.7339 30.3631 24.7097 30.2623C24.6907 30.1834 24.7167 30.0792 24.7943 30.057C24.8306 30.0466 24.8696 30.0566 24.8966 30.0831L25.0676 30.2513C25.1964 30.3779 25.3875 30.3759 25.5136 30.2464C25.6649 30.091 25.7659 29.7786 25.9738 29.7187L26.6438 29.5255C26.9414 29.4397 27.2616 29.5293 27.4722 29.7573L27.9778 30.3046C28.3105 30.6318 29.2922 31.0692 29.6177 30.7348C29.9432 30.4005 29.4866 29.4237 29.1539 29.0966L28.5983 28.6006C28.3669 28.394 28.2708 28.0741 28.3496 27.7734L28.5266 27.0985C28.582 26.887 28.89 26.7783 29.0422 26.622C29.1682 26.4926 29.1661 26.3005 29.0373 26.1738L28.8662 26.0056C28.8393 25.9791 28.8285 25.9401 28.838 25.9034C28.8584 25.8249 28.9629 25.7947 29.0421 25.8106C29.1415 25.8306 29.2506 25.8037 29.3298 25.7224C29.4558 25.593 29.4538 25.4009 29.3249 25.2742C29.1657 25.1179 29.1029 24.8874 29.1606 24.6715L29.5239 23.313C29.5759 23.1186 29.5194 22.9112 29.3762 22.7704C29.1115 22.5101 28.6722 22.579 28.4989 22.9079L27.6411 24.537C27.0575 25.6451 25.595 25.9106 24.6623 25.0777L22.5165 23.1614C22.47 23.1157 22.4516 23.0485 22.4682 22.9853L22.9878 21.0045C23.0093 20.9227 22.9854 20.8355 22.9252 20.7764C22.8131 20.6663 22.6272 20.6957 22.5544 20.8351L21.9636 21.9654C21.8203 22.2394 21.3967 22.2185 21.1813 22.4397C20.9686 22.6582 20.9904 23.0907 20.725 23.24L19.6437 23.8482C19.5027 23.9276 19.4771 24.1209 19.5927 24.2345C19.6553 24.2961 19.7461 24.3188 19.8302 24.2941L21.7737 23.7211C21.836 23.7027 21.9033 23.7196 21.9498 23.7652L23.9029 25.8793C24.7519 26.7982 24.5197 28.2735 23.43 28.884L21.8288 29.7811Z"
              fill="url(#paint2_linear_2590_26221)"
            />
            <path
              d="M8.09255 9.34177C7.7058 9.73488 7.7058 10.3712 8.09255 10.7644L18.8961 21.7456C19.287 22.1429 19.9276 22.1429 20.3185 21.7456C20.7005 21.3573 20.7005 20.7344 20.3185 20.3462L9.49212 9.34177C9.10537 8.94955 8.47929 8.94955 8.09255 9.34177Z"
              fill="url(#paint3_linear_2590_26221)"
            />
          </g>
          <path
            d="M35.8124 17.1394C35.3752 17.1394 35.0373 17.1993 34.7988 17.3192C34.6398 17.3991 34.5272 17.5422 34.4609 17.7486C34.3947 17.955 34.3616 18.2313 34.3616 18.5775C34.3616 18.9237 34.3947 19.2033 34.4609 19.4163C34.5272 19.6294 34.6597 19.7858 34.8584 19.8857C35.0572 19.9856 35.3685 20.0355 35.7925 20.0355H39.6084V30.0619C39.6084 30.3682 39.6183 30.5979 39.6382 30.751C39.658 30.9041 39.7177 31.0772 39.817 31.2703C39.9164 31.4633 40.0886 31.5998 40.3338 31.6797C40.5789 31.7596 40.9068 31.7996 41.3175 31.7996C41.7283 31.7996 42.0595 31.7596 42.3112 31.6797C42.563 31.5998 42.7385 31.4633 42.8379 31.2703C42.9373 31.0772 42.9969 30.9074 43.0168 30.761C43.0367 30.6145 43.0466 30.3881 43.0466 30.0819V20.0355H46.8426C47.2798 20.0355 47.6176 19.9756 47.8561 19.8557C48.0151 19.7758 48.1278 19.6327 48.194 19.4263C48.2602 19.2199 48.2934 18.9436 48.2934 18.5974C48.2934 18.2512 48.2602 17.9716 48.194 17.7586C48.1278 17.5455 47.9953 17.3891 47.7965 17.2892C47.5978 17.1893 47.2864 17.1394 46.8624 17.1394H35.8124Z"
            fill="#2C2D2E"
          />
          <path
            d="M60.3828 29.3236C59.7733 27.9388 59.3229 26.8935 59.0314 26.1878C60.0251 25.2158 60.5219 23.9775 60.5219 22.4728C60.5219 21.6073 60.3497 20.8217 60.0052 20.116C59.6607 19.4103 59.2235 18.8511 58.6935 18.4383C57.5938 17.5861 56.461 17.16 55.295 17.16H51.0022C50.1542 17.16 49.6375 17.3398 49.452 17.6993C49.346 17.899 49.2831 18.0755 49.2632 18.2286C49.2433 18.3817 49.2334 18.6114 49.2334 18.9177V30.0027C49.2334 30.4687 49.2731 30.8149 49.3526 31.0412C49.5116 31.5339 50.0549 31.7802 50.9823 31.7802C51.8303 31.7802 52.347 31.6005 52.5325 31.241C52.6385 31.0412 52.7014 30.8648 52.7213 30.7117C52.7412 30.5586 52.7511 30.3289 52.7511 30.0226V27.7657H55.2553L55.8714 27.7257C56.7723 29.8828 57.2891 31.0878 57.4216 31.3408C57.5011 31.474 57.6236 31.6038 57.7892 31.7303C57.9549 31.8568 58.1668 31.9201 58.4252 31.9201C58.6836 31.9201 59.0247 31.8268 59.4487 31.6404C60.2702 31.2942 60.6809 30.8681 60.6809 30.3622C60.6809 30.1491 60.5816 29.8029 60.3828 29.3236ZM52.7511 24.2305V20.6952H55.2553C55.666 20.6952 56.0635 20.845 56.4477 21.1446C56.832 21.4442 57.0241 21.887 57.0241 22.4728C57.0241 23.0587 56.832 23.4981 56.4477 23.7911C56.0635 24.084 55.6793 24.2305 55.295 24.2305H52.7511Z"
            fill="#2C2D2E"
          />
          <path
            d="M70.0279 18.1986C69.6834 17.5062 69.1534 17.16 68.438 17.16C68.1067 17.16 67.7921 17.2532 67.4939 17.4397C67.1958 17.6261 66.9739 17.8724 66.8282 18.1787L61.4621 29.3435C61.2369 29.7963 61.1243 30.1358 61.1243 30.3622C61.1243 30.8415 61.5085 31.2676 62.277 31.6404C62.7274 31.8668 63.0819 31.98 63.3402 31.98C63.5986 31.98 63.8106 31.9167 63.9762 31.7902C64.1418 31.6637 64.2611 31.5406 64.3339 31.4207C64.4068 31.3009 64.5095 31.1078 64.642 30.8415L65.6755 28.6844H71.1806L72.2141 30.8415C72.3466 31.1078 72.4492 31.3076 72.5221 31.4407C72.595 31.5739 72.7142 31.7004 72.8798 31.8202C73.0455 31.94 73.2575 31.9999 73.5158 31.9999C73.7742 31.9999 74.1286 31.8868 74.5791 31.6604C75.3476 31.2743 75.7318 30.8415 75.7318 30.3622C75.7318 30.1358 75.6192 29.7963 75.3939 29.3435L70.0279 18.1986ZM68.4181 22.9921L69.7497 25.7284H67.1064L68.4181 22.9921Z"
            fill="#2C2D2E"
          />
          <path
            d="M86.9865 17.3792C86.5493 17.1529 86.1584 17.0397 85.8139 17.0397C85.4695 17.0397 85.178 17.2194 84.9395 17.5789C84.86 17.7254 84.7672 17.9251 84.6612 18.1781L80.6864 26.9263C80.6334 26.8198 80.3982 26.3105 79.9809 25.3984C79.5635 24.4863 79.1197 23.5176 78.6493 22.4923C78.1789 21.467 77.7384 20.4983 77.3277 19.5862C76.9169 18.6741 76.6619 18.1215 76.5625 17.9285C76.4631 17.7354 76.3538 17.559 76.2346 17.3992C76.1286 17.266 76.016 17.1728 75.8967 17.1196C75.7775 17.0663 75.6019 17.0397 75.3701 17.0397C75.1382 17.0397 74.8037 17.1529 74.3664 17.3792C73.5847 17.7654 73.1938 18.1914 73.1938 18.6575C73.1938 18.8705 73.2932 19.1901 73.492 19.6162L78.9772 30.801C79.123 31.094 79.3449 31.3303 79.643 31.5101C79.9411 31.6898 80.2558 31.7797 80.587 31.7797H80.7858C81.1038 31.7797 81.4118 31.6898 81.7099 31.5101C82.008 31.3303 82.23 31.094 82.3757 30.801L87.861 19.6162C88.0597 19.1901 88.1591 18.8705 88.1591 18.6575C88.1591 18.1914 87.7682 17.7654 86.9865 17.3792Z"
            fill="#2C2D2E"
          />
          <path
            d="M92.6169 28.265V26.2477H96.5122C96.9759 26.2477 97.3204 26.2078 97.5456 26.1279C98.0491 25.9681 98.3009 25.4222 98.3009 24.4901C98.3009 23.6379 98.122 23.1186 97.7643 22.9322C97.5655 22.8257 97.39 22.7625 97.2376 22.7425C97.0852 22.7225 96.8567 22.7125 96.5519 22.7125H92.6169V20.6952H98.7182C99.182 20.6952 99.5264 20.6553 99.7517 20.5754C100.242 20.4156 100.487 19.8697 100.487 18.9376C100.487 18.0854 100.308 17.5662 99.9504 17.3797C99.7517 17.2732 99.5761 17.21 99.4238 17.19C99.2714 17.17 99.0428 17.16 98.7381 17.16H90.9077C90.2055 17.16 89.7285 17.2832 89.4767 17.5295C89.225 17.7759 89.0991 18.2386 89.0991 18.9177V30.0226C89.0991 30.4887 89.1389 30.8282 89.2184 31.0412C89.3774 31.5472 89.9206 31.8002 90.848 31.8002H98.7182C99.182 31.8002 99.5264 31.7603 99.7517 31.6804C100.242 31.5206 100.487 30.9747 100.487 30.0426C100.487 29.1904 100.308 28.6711 99.9504 28.4847C99.7517 28.3782 99.5761 28.3149 99.4238 28.295C99.2714 28.275 99.0428 28.265 98.7381 28.265H92.6169Z"
            fill="#2C2D2E"
          />
          <path
            d="M105.143 28.8442V18.9376C105.143 18.4716 105.11 18.1254 105.044 17.899C104.872 17.4064 104.322 17.16 103.395 17.16C102.547 17.16 102.03 17.3398 101.844 17.6993C101.738 17.899 101.675 18.0755 101.656 18.2286C101.636 18.3817 101.626 18.6114 101.626 18.9177V30.0226C101.626 30.4887 101.665 30.8282 101.745 31.0412C101.904 31.5472 102.447 31.8002 103.375 31.8002H110.529C110.967 31.8002 111.311 31.7336 111.563 31.6005C111.722 31.5206 111.834 31.3741 111.901 31.1611C111.967 30.948 112 30.6651 112 30.3122C112 29.9594 111.967 29.6764 111.901 29.4634C111.834 29.2503 111.702 29.0939 111.503 28.994C111.304 28.8942 110.986 28.8442 110.549 28.8442H105.143Z"
            fill="#2C2D2E"
          />
          <path
            d="M49.2166 1.99737V13.1023C49.2166 13.5684 49.2563 13.9079 49.3358 14.121C49.4948 14.6269 50.038 14.8799 50.9655 14.8799C51.8134 14.8799 52.3302 14.7002 52.5157 14.3407C52.6217 14.1409 52.6846 13.9678 52.7045 13.8214C52.7243 13.6749 52.7343 13.4419 52.7343 13.1223V2.01734C52.7343 1.5513 52.7012 1.20511 52.6349 0.978746C52.4627 0.48608 51.9128 0.239746 50.9854 0.239746C50.1374 0.239746 49.6207 0.419503 49.4352 0.779016C49.3292 0.978746 49.2662 1.15517 49.2464 1.3083C49.2265 1.46143 49.2166 1.69112 49.2166 1.99737Z"
            fill="#2C2D2E"
          />
          <path
            d="M63.3878 11.9239V2.01734C63.3878 1.5513 63.3547 1.20511 63.2885 0.978746C63.1162 0.48608 62.5664 0.239746 61.6389 0.239746C60.791 0.239746 60.2742 0.419503 60.0887 0.779016C59.9827 0.978746 59.9198 1.15517 59.8999 1.3083C59.8801 1.46143 59.8701 1.69112 59.8701 1.99737V13.1023C59.8701 13.5684 59.9099 13.9079 59.9894 14.121C60.1484 14.6269 60.6916 14.8799 61.619 14.8799H68.7738C69.211 14.8799 69.5555 14.8134 69.8072 14.6802C69.9662 14.6003 70.0788 14.4538 70.1451 14.2408C70.2113 14.0277 70.2444 13.7448 70.2444 13.3919C70.2444 13.0391 70.2113 12.7561 70.1451 12.5431C70.0788 12.33 69.9463 12.1736 69.7476 12.0737C69.5488 11.9739 69.2309 11.9239 68.7936 11.9239H63.3878Z"
            fill="#2C2D2E"
          />
          <path
            d="M71.3833 1.99737V13.1023C71.3833 13.5684 71.4231 13.9079 71.5025 14.121C71.6615 14.6269 72.2048 14.8799 73.1322 14.8799C73.9802 14.8799 74.4969 14.7002 74.6824 14.3407C74.7884 14.1409 74.8513 13.9678 74.8712 13.8214C74.8911 13.6749 74.901 13.4419 74.901 13.1223V2.01734C74.901 1.5513 74.8679 1.20511 74.8017 0.978746C74.6294 0.48608 74.0796 0.239746 73.1521 0.239746C72.3041 0.239746 71.7874 0.419503 71.6019 0.779016C71.4959 0.978746 71.433 1.15517 71.4131 1.3083C71.3932 1.46143 71.3833 1.69112 71.3833 1.99737Z"
            fill="#2C2D2E"
          />
          <path
            d="M82.5781 7.52981L83.3731 6.77083C84.9895 5.21294 86.182 3.98793 86.9505 3.09581C87.3479 2.62977 87.5467 2.22699 87.5467 1.88745C87.5467 1.5479 87.2817 1.14845 86.7517 0.689068C86.2217 0.229689 85.7845 0 85.44 0C85.0955 0 84.6914 0.272964 84.2277 0.818891C83.1147 2.12379 81.6573 3.79486 79.8554 5.8321V2.01727C79.8554 1.55123 79.8223 1.20504 79.756 0.978675C79.5838 0.486009 79.0339 0.239675 78.1064 0.239675C77.2585 0.239675 76.7418 0.419432 76.5563 0.778945C76.4503 0.978675 76.3873 1.1551 76.3675 1.30823C76.3476 1.46135 76.3376 1.69104 76.3376 1.9973V13.1023C76.3376 13.5683 76.3774 13.9078 76.4569 14.1209C76.6159 14.6269 77.1591 14.8799 78.0866 14.8799C78.9345 14.8799 79.4513 14.7001 79.6368 14.3406C79.7428 14.1409 79.8057 13.9678 79.8256 13.8213C79.8454 13.6748 79.8554 13.4418 79.8554 13.1222V9.22751L84.2277 14.2407C84.7047 14.8 85.1121 15.0796 85.45 15.0796C85.7878 15.0796 86.2217 14.8499 86.7517 14.3905C87.2817 13.9311 87.5467 13.5317 87.5467 13.1921C87.5467 12.8526 87.3281 12.4365 86.8908 11.9438C86.0429 10.9585 84.6053 9.48716 82.5781 7.52981Z"
            fill="#2C2D2E"
          />
          <path
            d="M92.4023 11.3447V9.32745H96.2976C96.7613 9.32745 97.1058 9.2875 97.331 9.20761C97.8345 9.04782 98.0863 8.5019 98.0863 7.56982C98.0863 6.71764 97.9074 6.19835 97.5497 6.01193C97.3509 5.90541 97.1754 5.84216 97.023 5.82219C96.8706 5.80222 96.6421 5.79223 96.3373 5.79223H92.4023V3.77496H98.5036C98.9674 3.77496 99.3118 3.73501 99.5371 3.65512C100.027 3.49534 100.272 2.94941 100.272 2.01734C100.272 1.16516 100.094 0.645863 99.7358 0.459449C99.5371 0.352926 99.3615 0.289679 99.2092 0.269706C99.0568 0.249733 98.8282 0.239746 98.5235 0.239746H90.6931C89.9909 0.239746 89.5139 0.362913 89.2621 0.609246C89.0104 0.855579 88.8845 1.31829 88.8845 1.99737V13.1023C88.8845 13.5684 88.9243 13.9079 89.0038 14.121C89.1628 14.6269 89.706 14.8799 90.6334 14.8799H98.5036C98.9674 14.8799 99.3118 14.84 99.5371 14.7601C100.027 14.6003 100.272 14.0544 100.272 13.1223C100.272 12.2701 100.094 11.7508 99.7358 11.5644C99.5371 11.4579 99.3615 11.3946 99.2092 11.3747C99.0568 11.3547 98.8282 11.3447 98.5235 11.3447H92.4023Z"
            fill="#2C2D2E"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2590_26221"
              x1="3.75684"
              y1="4.97888"
              x2="29.4034"
              y2="6.0791"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#AE5FFF" />
              <stop offset="0.0001" stop-color="#AE5FFF" />
              <stop offset="0.0002" stop-color="#AE5FFF" />
              <stop offset="1" stop-color="#6B1EFF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2590_26221"
              x1="0.000488281"
              y1="1.20667"
              x2="38.0132"
              y2="3.10079"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#AE5FFF" />
              <stop offset="0.0001" stop-color="#AE5FFF" />
              <stop offset="0.0002" stop-color="#AE5FFF" />
              <stop offset="1" stop-color="#6B1EFF" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_2590_26221"
              x1="33.4612"
              y1="26.787"
              x2="24.5779"
              y2="35.1383"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#AE5FFF" />
              <stop offset="0.0001" stop-color="#AE5FFF" />
              <stop offset="0.0002" stop-color="#AE5FFF" />
              <stop offset="1" stop-color="#6B1EFF" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_2590_26221"
              x1="7.80249"
              y1="9.04761"
              x2="22.4201"
              y2="9.66715"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#AE5FFF" />
              <stop offset="0.0001" stop-color="#AE5FFF" />
              <stop offset="0.0002" stop-color="#AE5FFF" />
              <stop offset="1" stop-color="#6B1EFF" />
            </linearGradient>
            <clipPath id="clip0_2590_26221">
              <rect
                width="34.3615"
                height="29.7068"
                fill="white"
                transform="translate(0 1.20618)"
              />
            </clipPath>
          </defs>
        </svg>
        <button>Подобрать тур</button>
      </div>

      <div className={styles.infa}>
        <div className={styles.help}>
          <p>Служба поддержки</p>
          <div className={styles.vector}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.118 13.702L13 14.5C10.218 13.104 8.49999 11.5 7.49999 9L8.26999 4.87L6.81499 1H3.06399C1.93599 1 1.04799 1.932 1.21699 3.047C1.63699 5.83 2.87699 10.877 6.49999 14.5C10.305 18.305 15.786 19.956 18.802 20.613C19.967 20.866 21 19.958 21 18.765V15.181L17.118 13.702V13.702Z"
                stroke="#2C2D2E"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>7 992 345-40-87</p>
          </div>
        </div>
        <div className={styles.icons}>
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 6.862C21.0034 8.40075 20.4106 9.881 19.346 10.992C16.905 13.523 14.537 16.162 12.006 18.6C11.425 19.15 10.504 19.13 9.94899 18.555L2.65399 10.993C0.448994 8.707 0.448994 5.017 2.65399 2.732C3.17514 2.185 3.80193 1.74952 4.49638 1.45197C5.19084 1.15442 5.93848 1.001 6.69399 1.001C7.44951 1.001 8.19715 1.15442 8.8916 1.45197C9.58606 1.74952 10.2129 2.185 10.734 2.732L11 3.006L11.265 2.732C11.7872 2.18629 12.4142 1.75161 13.1084 1.454C13.8026 1.15639 14.5497 1.00197 15.305 1C16.825 1 18.278 1.624 19.345 2.732C20.41 3.84284 21.0032 5.32311 21 6.862V6.862Z"
              stroke="#2C2D2E"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.6667 7.00003V5.03337C14.6667 4.42053 14.546 3.8137 14.3115 3.24751C14.077 2.68132 13.7333 2.16687 13.2999 1.73353C12.8666 1.30019 12.3521 0.95645 11.7859 0.721928C11.2198 0.487406 10.6129 0.366699 10.0001 0.366699C9.38725 0.366699 8.78041 0.487406 8.21422 0.721928C7.64804 0.95645 7.13359 1.30019 6.70025 1.73353C6.26691 2.16687 5.92317 2.68132 5.68864 3.24751C5.45412 3.8137 5.33341 4.42053 5.33341 5.03337V8.33337H5.59382C5.59382 8.33337 5.82392 8.33337 6.00073 8.33337C6.17754 8.33337 6.44214 8.33337 6.47766 8.33337H6.66675H13.3334V7.00003H6.66675V5.03337C6.66675 4.14931 7.01794 3.30146 7.64306 2.67634C8.26818 2.05122 9.11603 1.70003 10.0001 1.70003C10.8841 1.70003 11.732 2.05122 12.3571 2.67634C12.9822 3.30146 13.3334 4.14931 13.3334 5.03337V8.33337H13.6151C13.6151 8.33337 13.8239 8.33337 14.0007 8.33337C14.1775 8.33337 14.2894 8.33337 14.2894 8.33337H14.532H14.6375H14.6667H18.0001V20.3334H2.00008V8.33337H5.33341V7.00003H0.666748V20.3934C0.666748 20.7311 0.800902 21.055 1.0397 21.2938C1.27849 21.5325 1.60237 21.6667 1.94008 21.6667H18.0601C18.3978 21.6667 18.7217 21.5325 18.9605 21.2938C19.1993 21.055 19.3334 20.7311 19.3334 20.3934V7.00003H14.6667Z"
              fill="#2C2D2E"
            />
          </svg>
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2590_26251)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                fill="#001C3D"
                fill-opacity="0.08"
              />
              <path
                d="M14.3571 9.64279C14.3571 8.34047 13.3023 7.28564 11.9999 7.28564C10.6976 7.28564 9.64279 8.34047 9.64279 9.64279C9.64279 10.9451 10.6976 11.9999 11.9999 11.9999C13.3023 11.9999 14.3571 10.9451 14.3571 9.64279ZM7.28564 15.5274V16.1399C7.28564 16.4571 7.54276 16.7142 7.85993 16.7142H16.1399C16.4571 16.7142 16.7142 16.4571 16.7142 16.1399V15.5274C16.7142 13.4505 13.5733 12.8571 11.9999 12.8571C10.4265 12.8571 7.28564 13.4505 7.28564 15.5274Z"
                fill="#AEB7C2"
              />
            </g>
            <defs>
              <clipPath id="clip0_2590_26251">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
