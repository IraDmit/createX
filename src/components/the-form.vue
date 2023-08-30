<template>
  <div class="form">
    <h3 class="title">A quick way to discuss details</h3>
    <div class="form-content">
      <div class="field">
        <div class="text">Name*</div>
        <input type="text" placeholder="Your name" class="custom-input" />
      </div>
      <div class="field">
        <div class="text">Phone*</div>
        <input
          type="text"
          placeholder="Your phone number"
          class="custom-input"
        />
      </div>
      <div class="field">
        <div class="text">Email</div>
        <input
          type="text"
          placeholder="Your working email"
          class="custom-input"
        />
      </div>
      <div class="field">
        <div class="text">Message*</div>
        <textarea
          type="text"
          placeholder="Your message"
          class="custom-input message"
        />
      </div>
      <div class="field-checkbox">
        <div
          class="checkbox"
          @click="isActive = !isActive"
          :class="{ active: isActive }"
        ></div>
        <div class="checkbox-text" @click="isActive = !isActive">
          I agree to receive communications from Createx Construction Bureau.
        </div>
      </div>
    </div>
    <div class="btn">send request</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  width: 495px;
  padding: 48px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 4px;
  border: 1px solid #e5e8ed;
  background-color: #fff;
  box-shadow: 0px 4px 4px -4px rgba(30, 33, 44, 0.05),
    0px 12px 10px -6px rgba(30, 33, 44, 0.08),
    0px 26px 24px -10px rgba(30, 33, 44, 0.1),
    0px 60px 80px -20px rgba(30, 33, 44, 0.16);
  .title {
    font-family: Ubuntu;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    color: #1e212c;
  }
  .form-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
  .text {
    font-family: Ubuntu;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    color: #424551;
  }
  .field {
    display: flex;
    max-width: 415px;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    .custom-input {
      display: flex;
      max-width: 415px;
      width: 100%;
      padding: 11px 16px 12px 16px;
      align-items: center;
      border-radius: 4px;
      border: 1px solid #d7dadd;
      background: #f4f5f6;
      &.message {
        resize: none;
      }
    }
  }
  .field-checkbox {
    display: flex;
    .checkbox {
      width: 16px;
      height: 16px;
      border: 1px solid #9A9CA5;
      cursor: pointer;
      border-radius: 4px;
      position: absolute;
      &.active {
        background-color: #ff5a30;
        border-color: #ff5a30;
        &::before{
            content: '✓';
            position: absolute;
            top: -1px;
            left: 1px;
            width: 100%;
            height: 100%;
            color: #fff;
        }
      }
    }
    .checkbox-text{
        padding-left: 28px;
        cursor: pointer;
    }
  }
}
</style>
