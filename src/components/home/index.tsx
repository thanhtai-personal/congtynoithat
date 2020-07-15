import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import MouseAnimate from 'root/components/commons/mouseAnimate'
import CarouselSlider from './carouselSlider'
import ProductCard from './productCard'
import {
  Paper,
  Typography,
  Container,
  Grid
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  '@global': {
    overflowY: 'auto',
    '*::-webkit-scrollbar-thumb': {
      background: 'steelblue',
      borderRadius: '10px',
      display: 'none'
    },
    '*::-webkit-scrollbar': {
      width: '10px',
      display: 'none'
    },
    '*::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 5px grey',
      borderRadius: '10px',
      display: 'none'
    }
  },
  root: {
    cursor: 'grab',
    backgroundColor: 'rgba(255,228,196,0.8)'
  },
  caroselSlider: {
    width: 'calc(100vw - 0px)', height: '95vh'
    // animation: `$slideEffect 3000ms ${theme.transitions.easing.easeInOut}`
  },
  introduce: {
    width: 'calc(100vw - 0px)',
    padding: theme.spacing(2),
    paddingRight: theme.spacing(4),
    marginTop: theme.spacing(5)
  },
  contact: {
    width: 'calc(100vw - 0px)',
    backgroundColor: 'rgba(30,30,30,1)',
    color: 'rgba(255,255,255,1)',
    padding: theme.spacing(2),
    paddingRight: theme.spacing(4)
  },
  footer: {
    width: 'calc(100vw - 0px)',
    height: '5vh',
    maxHeight: '75px',
    minHeight: '50px',
    backgroundColor: 'rgba(18,18,18,1)',
    color: 'rgba(255,255,255,1)',
    bottom: 0
  },
  footerText: {
    fontSize: '0.7em',
    padding: '10px',
  },
  selectedText: {
    cursor: 'text',
    userSelect: 'text',
    '::selection': {
      color: 'black',
      background: 'yellow'
    }
  },
  project: {
    position: 'relative',
    height: '95vh',
    overflow: 'hidden',
    padding: '20px',
  },
  section: {
    width: '100%',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2)
  },
  sectionImage: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '300px',
    display: 'flex'
  },
  imageText: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    color: 'yellow',
    backgroundColor: 'rgba(255,255,255,0)',
    paddingTop: theme.spacing(20),
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.3)'
    }
  },
  '@keyframes slideEffect': {
    '0%': {
      opacity: 0.2,
      height: 0
    },
    '100%': {
      opacity: 1,
      height: '100vh'
    }
  }
}))

const items = [
  {
    name: 'Image test 1',
    description: 'A PDF Reader specially designed for musicians.',
    image: 'https://noithatanhung.vn/uploads/images/bai-viet/pham-thuy/6-2018/12/noi-that-phong-khach-go-oc-cho-1-.jpg'
  },
  {
    name: 'Image test 2',
    description: 'My Solution on the 2019 Hash Code by Google Slideshow problem.',
    image: 'https://thietkenoithat.com/Portals/0/xNews/uploads/2018/10/23/20-thiet-ke-noi-that-phong-khach-nha-ong-dep-me-ly-27_1.jpg'
  },
  {
    name: 'Image test 3',
    description: 'A exciting mobile game game made in the Unity Engine.',
    image: 'https://noithatkhonggiandep.vn/wp-content/uploads/2017/12/PHONG-SHC_View02.jpg'
  },
  {
    name: 'Image test 4',
    description: 'A Generic carousel UI component for React using material ui.',
    image: 'https://gotrangtri.vn/wp-content/uploads/2019/04/anh-bia-2.jpg'
  }
]


const HomeComponent = (props: any, state: any) => {
  const classes = useStyles()
  const { } = props

  return (
    <div className={classes.root}>
      <MouseAnimate />
      <CarouselSlider
        id='carousel-slider'
        className={classes.caroselSlider}
        autoPlay={true}
        timer={500}
        animation={'fade'}
        indicators={true}
        timeout={500}
        navButtonsAlwaysVisible={false}
      >
        {
          items.map((item, index) => {
            return (<Paper
              key={index}
              className={classes.project}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
              elevation={10}
            >
            </Paper>)
          })
        }
      </CarouselSlider>
      <Container maxWidth='lg'>
        <div id='introduce' className={`${classes.introduce} ${classes.selectedText}`}>
          Nổi tiếng trong giới thiết kế nội thất, thi công nội thất, với hơn 10 năm chuyên thiết kế thi công nội thất hàng nghìn công trình trong cả nước, nội thất MOREHOME hiểu rõ tầm quan trọng của dịch vụ trang trí nhà đặc biệt thiết kế nội thất. Vì vậy MOREHOME xin giới thiệu quý gia chủ tổng hợp toàn bộ mẫu thiết kế nội thất chung cư, biệt thự, văn phòng, khách sạn, nhà phố, nhà liền kề, nhà mái thái,...mà kts hàng đầu MOREHOME đem lại.
        </div>
      </Container>
      <Container maxWidth='lg'>
        <Grid className={classes.section} key={`products-${0}`} container spacing={1}>
          <Grid key={`product-1-${0}`} item xs={12}>
            <Typography variant='h4'> </Typography>
          </Grid>
          <Grid key={`product-1-${0}`} item xs={12}>
            <Paper style={{
              backgroundImage: 'url(https://inconcept.vn/Content/img/product/menu-img-01.jpg)',
            }}
            className={classes.sectionImage}>
              <div className={classes.imageText}>ĐẴNG CẤP TỪ CHẤT LƯỢNG</div>
            </Paper>
          </Grid>
          <Grid key={`product-2-${0}`} item xs={6}>
            <Paper style={{
              backgroundImage: 'url(https://inconcept.vn/Content/img/product/menu-img-02.jpg)'
            }}
            className={classes.sectionImage}>
              <div className={classes.imageText}>DUYÊN DÁNG VÀ THANH LỊCH</div>
            </Paper>
          </Grid>
          <Grid key={`product-3-${0}`} item xs={6}>
            <Paper style={{
              backgroundImage: 'url(https://inconcept.vn/Content/img/product/menu-img-03.jpg)',
            }}
            className={classes.sectionImage}>
              <div className={classes.imageText}>TINH TẾ TRONG TỪNG ĐƯỜNG NÉT</div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <div id='contact' className={`${classes.contact} ${classes.selectedText}`}>
        MOREHOME TP Hồ chí Minh
          Văn phòng thiết kế và thi công:<br />
        <br />
          + Địa chỉ: Tầng 3, Tòa T6-08, Đường Tôn Quang Phiệt, Quận Bắc Từ Liêm, Hà Nội(Khu đô thị Nam Cường, đối diện chéo bộ Công An)<br />
        <br />
          + Giờ làm việc: 8:00 - 17:30 các ngày trong tuần từ thứ 2 đến thứ 7<br />
        <br />
          + Xưởng gỗ tự nhiên: Xã Thượng Cát, Từ Liêm, Hà Nội<br />
        <br />
          + Xưởng gỗ công nghiệp: Lô B2-3-6 - Khu công nghiệp Nam Thăng Long - Quận Bắc Từ Liêm - Hà Nội<br />
        <br />
          + Xưởng đá nội thất: Lô B2-3-6 - Khu công nghiệp Nam Thăng Long - Quận Bắc Từ Liêm - Hà Nội.<br />
        <br />
          + Xưởng sản xuất tranh kính {'&'} Kính nội thất: Xã Thượng Cát, Từ Liêm, Hà Nội.<br />
        <br />
          + Có chỗ để xe ô tô thoải mái<br />
        <br />
          + Hotline: 097.2828.264 (Mr.Đạt)<br />
        <br />
          + Email: chinh@morehome.vn<br />
      </div>
      <div id='footer' className={classes.footer}>
        <Typography className={`${classes.footerText} ${classes.selectedText}`}>Copyright 2020 by Thanh Tài Trần | Privacy Statement | Terms Of Use</Typography>
      </div>
    </div>
  )
}


interface RootState {
}

const mapState = (state: RootState) => ({
})

const mapDispatch = {
}

export default connect(mapState, mapDispatch)(HomeComponent)