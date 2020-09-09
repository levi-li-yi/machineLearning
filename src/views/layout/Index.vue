<template>
	<div class="app_layout">
		<el-container id="app_container">
			<el-header height="50px">
				<nav-bar></nav-bar>
			</el-header>
			<el-container class="bottom_container">
				<el-aside :width="sidebarWeight">
					<side-bar @toggleClass="changeClass" class="sidebar_container"></side-bar>
				</el-aside>
				<el-container class="main_container">
					<!--<el-header height="40px">-->
						<!--<TabsBar ref="tabsBar"></TabsBar>-->
					<!--</el-header>-->
					<el-main class="scroll_box">
						<app-main ref="appMain"  class="app_main"></app-main>
					</el-main>
				</el-container>
			</el-container>
		</el-container>
	</div>
</template>

<script>
import AppMain from './components/AppMain';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';

export default {
	name: 'Index',
  components: {
    AppMain,
    NavBar,
    SideBar
	},
  data() {
    return {
      sidebarWeight: '200px',
    }
  },
	methods: {
    // 样式切换
    changeClass(isCollapse) {
      isCollapse ? this.sidebarWeight = '50px' : this.sidebarWeight = '200px'
      this.$refs.tabsBar.changeTabsWidth()
    },
	}
}
</script>

<style lang="less">
	@import "./../../assets/css/index.less";
	.app_layout{
		height: 100%;
		#app_container{
			height: 100%;
		}
		.el-header{
			background-color: #282b33;
		}
		.bottom_container{
			height: calc(100% - 50px);
			.sidebar_container{
				height: 100%;
				overflow: auto;
				box-shadow: 1px 1px 5px 0 #eee;
			}
			.main_container{
				.el-main{
					background-color: #eef3ff!important
				}
			}
		}
	}
</style>