<template>
  <header class="container">
    <div class="header_content">
      <div class="logo">
        <img src="../assets/images/logo.svg" alt="../assets/images/logo.svg" />
      </div>
      <div class="links">
        <div class="link">About us</div>
        <div class="link">Services</div>
        <div class="link">Work</div>
        <div class="link">News</div>
        <div class="link">Contacts</div>
      </div>
      <div class="contacts">
        <div class="contact_container">
          <img
            src="../assets/images/iphone.svg"
            alt="../assets/images/iphone.svg"
          />
          <div class="contact">
            <p class="text">Call us</p>
            <p class="phone">(405) 555-0128</p>
          </div>
        </div>
        <div class="contact_container">
          <img
            src="../assets/images/chat.svg"
            alt="../assets/images/chat.svg"
          />
          <div class="contact">
            <p class="text">Talk to us</p>
            <p class="mail">hello@createx.com</p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
p {
  margin: 0;
}
.header_content {
  display: flex;
  margin: 20px 10px;
  align-items: center;
  justify-content: space-between;
  .logo {
    cursor: pointer;
  }
  .links,
  .contacts {
    display: inline-flex;
    align-items: center;
  }
  .links {
    gap: 40px;
    .link {
      font-family: Ubuntu;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 160%;
      cursor: pointer;
    }
  }
  .contacts {
    gap: 36px;
    .contact_container {
      display: flex;
      img {
        margin-right: 12px;
      }
      .text {
        display: flex;
        justify-content: start;
        font-family: Ubuntu;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
      }
      .phone,
      .mail {
        font-family: Ubuntu;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
      }
    }
  }
  @media (max-width: 1120px) {
    .header_content {
      font-size: 14px;
      flex-wrap: wrap;
    }
    .contacts {
      gap: 20px;
      .contact_container {
        img {
          width: 30px;
        }

      }
    }
  }
}
</style>
