<template>
  <div class="container">
    <h3 class="title">
      Browse our selected projects and learn more about our work
    </h3>
    <div class="projects-content">
      <div
        class="project"
        v-for="(item, idx) in projectsList"
        :key="'project' + idx"
      >
        <img :src="item.img" class="box-img" />
        <div class="information">
          <div class="project-name">{{ item.title }}</div>
          <div class="project-desc">{{ item.desc }}</div>
          <button class="more">View Project</button>
        </div>
      </div>
    </div>
    <div class="more-information">
      <div class="learn-more">Explore all our works</div>
      <div class="btn">View portfolio</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectsList: [
        {
          title: "Red Finger Building",
          desc: "Business Centers",
          img: require("../assets/images/red-build.jpg"),
        },
        {
          title: "Cubes Building",
          desc: "Business Centers",
          img: require("../assets/images/cubes0build.png"),
        },
        {
          title: "The Pencil Building",
          desc: "Stores & Malls",
          img: require("../assets/images/pencil-build.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-family: Ubuntu;
  font-size: 46px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  margin: 205px 0 60px 0;
  @media (max-width: 768px) {
    font-size: 30px;
  }
  @media (max-width: 576px) {
    font-size: 28px;
  }
}
.projects-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  // display: flex;
  // justify-content: space-between;
  .project {
    position: relative;
    align-items: center;
    display: flex;
    padding-bottom: 0px;
    flex-direction: column;
    gap: 16px;
    overflow: hidden;
    box-shadow: 0px 4px 4px -4px rgba(30, 33, 44, 0.03),
      0px 12px 10px -6px rgba(154, 156, 165, 0.04),
      0px 30px 24px -10px rgba(154, 156, 165, 0.05),
      0px 80px 80px -20px rgba(154, 156, 165, 0.08);
    border-radius: 4px;
    img {
      height: 416px;
    }
    .information {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      bottom: -75px;
      left: 0;
      background-color: #fff;
      width: 100%;
      transition: 0.3s;
      padding: 24px;
      .project-name {
        font-family: Ubuntu;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%;
      }
      .project-desc {
        font-family: Ubuntu;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        color: #787a80;
        margin-bottom: 24px;
      }
      .more {
        background-color: #fff;
        display: inline-flex;
        padding: 0px 32px;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        border-radius: 4px;
        border: 1px solid #ff5a30;
        color: var(--primary, #ff5a30);
        font-family: Ubuntu;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 44px;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        cursor: pointer;
      }
      @media (max-width: 1230px) {
        padding: 18px;
        bottom: -67px;
        .more {
          font-size: 12px;
        }
        .project-desc {
          margin-bottom: 15px;
        }
      }
      @media (max-width: 768px) {
        .project-name {
          font-size: 16px;
        }
      }
    }
    .box-img {
      width: 100%;
    }
    &:hover .information {
      bottom: 0;
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
.more-information {
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
}
</style>
