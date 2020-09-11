<template>
	<div class="nav_bar_box">
		<div class="nav_title">机器学习平台</div>
		<!--<div class="nav_user">-->
			<!--<el-dropdown-->
				<!--@command="handleCommand"-->
				<!--@visible-change="dropChange"-->
				<!--class="user_ctr"-->
				<!--:class="{'open_dropdown': dropStatus}"-->
				<!--:trigger="'click'">-->
        <!--<span class="el-dropdown-link">-->
          <!--<img src="@/assets/img/user_head_default.png" alt="" class="user_icon">-->
          <!--管理员-->
          <!--<i></i>-->
        <!--</span>-->
				<!--<el-dropdown-menu slot="dropdown" class="user_ctr_select">-->
					<!--<el-dropdown-item command="helpCenter">-->
						<!--<i class="iconfont icon-help"></i>-->
						<!--帮助中心-->
					<!--</el-dropdown-item>-->
					<!--<el-dropdown-item command="logout">-->
						<!--<i class="iconfont icon-logout"></i>-->
						<!--退出登录-->
					<!--</el-dropdown-item>-->
				<!--</el-dropdown-menu>-->
			<!--</el-dropdown>-->
		<!--</div>-->
	</div>
</template>

<script>
export default {
	name: 'NavBar',
  data() {
    return {
      dropStatus: false, // dropdown开启状态
    }
  },
	methods: {
    // user_ctr
    handleCommand(command) {
      switch (command) {
        case 'helpCenter':
          break
        case 'logout':
          break
        case 'goAdmin':
          break
        default:
          break
      }
    },
    // dropStatus
    dropChange(value) {
      this.dropStatus = value
    },
	}
}
</script>

<style lang="less">
	.nav_bar_box{
		text-align: left;
		height: 100%;
		line-height: 50px;
		font-size: 18px;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.user_ctr_select {
			box-shadow: none !important;
			border: solid 1px #e4e7ed !important;
			color: #333333 !important;
			.el-dropdown-menu__item {
				&:hover {
					color: #2196f3 !important;
					background-color: rgba(33, 150, 243, 0.1);
				}
			}
		}
	}
</style>