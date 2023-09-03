<template>
  <div class="container form">
    <h3 class="title">Want to know more? Ask us a question:</h3>
    <div class="form-content">
      <div class="field">
        <p>Name</p>
        <input placeholder="Your name" class="custom-input" />
      </div>
      <div class="field">
        <p>Phone</p>
        <input placeholder="Your phone" class="custom-input" />
      </div>
      <div class="field message">
        <p>Message</p>
        <input placeholder="Your message" class="custom-input" />
      </div>
      <button class="btn">send</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
p {
  margin: 0;
}
.form {
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0px 4px 4px -4px rgba(30, 33, 44, 0.03),
    0px 12px 10px -6px rgba(154, 156, 165, 0.04),
    0px 30px 24px -10px rgba(154, 156, 165, 0.05),
    0px 80px 80px -20px rgba(154, 156, 165, 0.08);
  .title {
    font-family: Ubuntu;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    margin-bottom: 32px;
  }
  .form-content {
    width: 100%;
    display: flex;
    padding: 0 60px;
    gap: 24px;
    margin-bottom: 48px;
    align-items: flex-end;
    .field {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 8px;
      &.message {
        width: calc(100% - 55%);
      }
      & p {
        font-family: Ubuntu;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
      }
      .custom-input {
        display: flex;
        width: 100%;
        padding: 11px 16px 12px 16px;
        align-items: center;
        border-radius: 4px;
        border: 1px solid #d7dadd;
        background: #f4f5f6;
      }
      &:last-of-type {
        .custom-input {
          width: 100%;
        }
      }
    }
    .btn {
      display: inline-flex;
      padding: 0px 32px;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      color: #fff;
      text-align: center;
      font-family: Ubuntu;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 44px; /* 314.286% */
      letter-spacing: 0.5px;
      text-transform: uppercase;
      background-color: #ff5a30;
      border: 0;
      border-radius: 4px;
    }
  }
  @media (max-width: 1230px) {
    width: 95%;
  }
  @media (max-width: 768px) {
    .form-content {
      flex-direction: column;
      align-items: center;
      .field {
        width: 100%;
        &.message {
          width: 100%;
        }
      }
    }
  }
}
</style>
