<template>
  <header>
    <div class="container">
      <div class="logo">
        <img src="../assets/images/logo.svg" alt="../assets/images/logo.svg" />
      </div>
      <div class="burger" @click="isOpen = !isOpen">|||</div>
    </div>
    <aside class="header_content" :class="{ open: isOpen }">
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
    </aside>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  watch: {
    isOpen(newValue) {
      newValue
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "");
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  margin: 0;
}
header {
  position: relative;
  .container {
    padding: 24px;
    display: flex;
    justify-content: space-between;
  }
  .header_content {
    position: fixed;
    width: 100%;
    z-index: 100;
    height: 100vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 20px;
    opacity: 0;
    overflow: hidden;
    transition: 0.3s;
    transform: translateX(-100%);
    .logo {
      cursor: pointer;
    }
    .links,
    .contacts {
      display: inline-flex;
      flex-direction: column;
    }
    .links {
      gap: 40px;
      margin-bottom: 40px;
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
      gap: 40px;
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
  & .open {
    opacity: 1;
    overflow: visible;
    transform: translateX(0%);
  }
}
</style>
