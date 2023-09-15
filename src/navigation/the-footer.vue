<template>
  <footer>
    <div class="container">
      <div class="first-row">
        <div class="company-info">
          <div class="logos">
            <img
              src="../assets/images/logo-negative.svg"
              class="company-logo"
            />
            <div class="logos-media">
              <div
                class="logo"
                v-for="(item, idx) in mediaList"
                :key="'media' + idx"
              >
                <img :src="item.icon" alt="" />
              </div>
            </div>
          </div>
          <div class="company-desc">
            Createx Construction Bureau has been successfully operating in the
            USA construction market since 2000. We are proud to offer you
            quality construction and exemplary service. Our mission is to set
            the highest standards for construction sphere.
          </div>
        </div>
        <div class="subscribe-content">
          <h3 class="title">Let’s stay in touch</h3>
          <div class="subscribe">
            <input
              type="text"
              placeholder="Your email address "
              class="input-footer"
            />
            <div class="btn">subscribe</div>
          </div>
          <div class="note">
            *Subscribe to our newsletter to receive communications and early
            updates from Createx Construction Bureau.
          </div>
        </div>
      </div>
      <div class="second-row">
        <div class="contacts">
          <h3 class="title-col">HEAD OFFICE</h3>
          <div class="contact-content">
            <div class="contact-text">Address:</div>
            <div class="contact">8502 Preston Rd. Inglewood, New York</div>
          </div>
          <div class="contact-content">
            <div class="contact-text">Call:</div>
            <div class="contact">(405) 555-0128</div>
          </div>
          <div class="contact-content">
            <div class="contact-text">Email:</div>
            <div class="contact">hello@createx.com</div>
          </div>
        </div>
        <div class="info-col">
          <h3 class="title-col">WHO WE ARE</h3>
          <div class="link">About Us</div>
          <div class="link">Available Positions</div>
          <div class="link">Contacts</div>
        </div>
        <div class="info-col">
          <h3 class="title-col">OUR EXPERIENCE</h3>
          <div class="link">Services</div>
          <div class="link">Work</div>
          <div class="link">News</div>
        </div>
      </div>
      <div class="third-row">
        <div class="dev-contact">
          <div>© All rights reserved. Made with</div>
          <img src="../assets/images/Heart.svg" />
          <div>by Createx Studio</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      mediaList: [
        { icon: require("../assets/images/Whatsapp.svg") },
        { icon: require("../assets/images/Messanger.svg") },
        { icon: require("../assets/images/Facebook.svg") },
        { icon: require("../assets/images/Twitter.svg") },
        { icon: require("../assets/images/YouTube.svg") },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
footer {
  background-color: #1e212c;
  padding: 80px 0;
  color: #ffffff;
  .first-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 49px;
    gap: 20px;
    flex-wrap: wrap;
    .company-info {
      .company-desc {
        opacity: 0.6;
        max-width: 493px;
        width: 100%;
        font-family: Ubuntu;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
      }
      .logos {
        display: flex;
        align-items: center;
        margin-bottom: 24px;
        .logos-media {
          display: flex;
          margin-left: 60px;
          .logo {
            img {
              width: 24px;
              height: 24px;
            }
          }
        }
      }
    }
    .subscribe-content {
      max-width: 495px;
      width: 100%;
      .title {
        font-family: Ubuntu;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%;
      }
      .subscribe {
        overflow: hidden;
        display: flex;
        align-items: center;
        margin: 24px 0 16px 0;
        .input-footer {
          border-radius: 4px 0 0 4px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.12);
          padding: 11px 16px 12px 16px;
          max-width: 354px;
          width: 100%;
        }
        .btn {
          border-radius: 0 4px 4px 0;
          line-height: 44px;
        }
      }
      .note {
        opacity: 0.6;
        font-family: Ubuntu;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
      }
    }
  }
  .second-row {
    display: flex;
    gap: 125px;
    @media (max-width: 768px) {
      gap: 40px;
    }
    flex-wrap: wrap;
    .title-col {
      font-family: Ubuntu;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 150%; /* 24px */
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 13px;
    }
    .contact-content {
      display: flex;
      .contact-text {
        font-family: Ubuntu;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
      }
      .contact {
        opacity: 0.6;
        margin-left: 2px;
        font-family: Ubuntu;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
      }
    }
    .info-col {
      .link {
        font-family: Ubuntu;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        opacity: 0.6;
      }
    }
  }
  .third-row {
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
    align-items: flex-end;
    @media (max-width: 475px) {
      flex-wrap: wrap;
    }
    .dev-contact {
      display: flex;
      font-family: Ubuntu;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      gap: 4px;
      img {
        width: 16px;
        height: 16px;
      }
      div {
        opacity: 0.6;
      }
    }
  }
}
</style>
