<template>
	<div class="main_form_contoiner">
		<form-header-nav ref="FormHeaderNav" pageName="算法"></form-header-nav>
		<el-steps :space="200" :active="stepActive">
			<el-step title="训练规范">1</el-step>
			<el-step title="超参规范">2</el-step>
			<el-step title="完成">3</el-step>
		</el-steps>
		<div>
			<form-step-first ref="FormStepFirst" v-if="stepActive === 1" @confirm="stepActive++"></form-step-first>
			<form-step-second ref="FormStepSecond" v-if="stepActive === 2" @confirm="stepActive++"></form-step-second>
			<form-step-third ref="FormStepThird" v-if="stepActive === 3"></form-step-third>
		</div>
		<!--&lt;!&ndash;底部按钮&ndash;&gt;-->
		<!--<form-bottom-btn ref="FormSubmitBtn" @cancel="cancel" @confirm="confirm" :confirmName="confirmName" v-if="stepActive < 3">-->
		<!--</form-bottom-btn>-->
	</div>
</template>

<script>
import FormStepFirst from './components/FormStepFirst';
import FormStepSecond from './components/FormStepSecond';
import FormStepThird from './components/FormStepThird';

export default {
	name: 'AlgorithmManageForm',
  components: {
    FormStepFirst,
    FormStepSecond,
    FormStepThird
  },
  data() {
    return {
      stepActive: 1,
      confirmName: '下一步'
    }
  },
	methods: {
	}
}
</script>

<style lang="less">
	.main_form_contoiner{
		.el-steps--horizontal{
			padding-bottom: 10px;
			background-color: #eef3ff;
		}
		.el-step.is-horizontal{
			position: relative;
			.el-step__main{
				position: absolute;
				top: -6px;
				left: 24px;
				padding: 0 5px;
				background-color: #eef3ff;
				.el-step__title{
					color: #8a8e99;
				}
			}
			.el-step__head {
				.el-step__line{
					height: 1px;
				}
				.el-step__icon{
					border: 1px solid #8a8e99;
				}
				.el-step__icon-inner{
					font-size: 12px;
					font-weight: normal;
					color: #8a8e99;
				}
			}
			.el-step__head.is-finish {
				border-color: transparent;
				.el-step__line{
					background-color: #5e7ce0;
				}
				.el-step__icon.is-text{
					border: none;
					color: #fff;
					background-color: #5e7ce0;
				}
				.el-step__icon-inner {
					color: #fff;
				}
			}
			.el-step__title{
				font-size: 12px;
			}
			.el-step__title.is-finish{
				color: #5e7ce0;
			}
		}
	}
</style>