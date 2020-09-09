<template>
  <div class="pagination" ref="page" v-show="total">
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pageSelect"
      :page-size="pageSize"
      :layout="'prev,pager,next,slot,total' + (pageSelectShow ? ',sizes': '')"
      :total="total">
      <!--<span class="page_number">
        <b class="page_NO">{{currentPage > sumPage ? sumPage : currentPage}}</b> / {{sumPage}}
      </span>-->
    </el-pagination>
    <div class="page_jump">
      <span>去第</span>
      <el-input-number ref="inputNumber" controls-position="right" :min="1" :max="sumPage"
                       v-model.trim.number="jumpPage"
                       @keyup.native.enter="jumpBtn" type="tel" size="mini"></el-input-number>
      <span>页</span>
    </div>
    <el-button size="mini" @click="jumpBtn">确定</el-button>
  </div>
</template>

<script>
export default {
  name: 'CommonPagination',
  props: {
    // 当前页
    currentPage: {
      type: Number,
      default: 1
    },
    // 分页大小
    pageSize: {
      type: Number,
      default: 15
    },
    // 分页总数
    total: {
      type: Number,
      default: 1
    },
    // 分页选择展示
    pageSelectShow: {
      type: Boolean,
      default: true
    },
    // 更多分页
    morePage: {
      type: Array,
      defaultProps: []
    }
  },
  data() {
    return {
      jumpPage: '', // 跳转分页
      pageSelect: [10, 30, 50, 100], // 分页大小选择
      isPage: true, // 是否当前
    };
  },
  computed: {
    // 页面计算
    sumPage() {
      return Math.ceil(this.total / this.pageSize);
    },
  },
  watch: {
    // 监听页面计算
    sumPage(old, now) {
      if (old !== now) {
        this.isPage = true;
      }
    }
  },
  mounted() {
    this.setPageSelect();
  },
  methods: {
    // 修改pageSize
    handleSizeChange(val) {
      const page = {
        pageSize: val,
        pageNo: 1
      };
      this.$emit('updateData', page);
      this.isPage = false;
    },
    // 选择当前pageNo
    handleCurrentChange(val) {
      if (this.isPage === true) {
        const page = {
          pageSize: this.pageSize,
          pageNo: val
        };
        this.$emit('updateData', page);
      }
    },
    // 跳转按钮点击
    jumpBtn() {
      if (!/^[0-9]*[1-9][0-9]*$/.test(this.jumpPage)) {
        this.jumpPage = 1;
      }
      if (this.jumpPage > this.sumPage) {
        this.jumpPage = this.sumPage;
      }
      this.$refs.inputNumber.setCurrentValue(this.jumpPage);
      const page = {
        pageSize: this.pageSize,
        pageNo: this.jumpPage
      };
      this.$emit('updateData', page);
    },
    // 设置page的选择
    setPageSelect() {
      if (Array.isArray(this.morePage) && this.morePage.length > 0) {
        this.pageSelect = this.pageSelect.concat(this.morePage);
      }
    }
  }
};
</script>

<style scoped>

</style>
