import Bookingmap from '../components/Bookingmap/Bookingmap'
import OrderSteps from '../components/Bookingmap/OrderSteps'
import Legend from '../components/Bookingmap/Legend'
import Wrapper from '../components/Wrapper'


const steps = [
    "choose_booth",
    "confirm",
    "pay",
    "access"
  ]

  
const SalesMap = (props) => (

    <Wrapper {...props}>
    <div>
        <div>
            <OrderSteps items={steps} active={0} />
            <Legend allowedGroupIds={ [264,265,266,267] } />
        </div>
 
        <Bookingmap />

    </div>
    </Wrapper>

)


export default SalesMap