class Strategy {
    calculate(a){}
}

class SelfPickUp extends Strategy{
    calculate(a){
       console.log(`Самовивіз. До сплати: ${a}`)
    }
}

class ExternalDeliveryService extends Strategy{
    calculate(a){
       console.log(`Зовнішня служба доставки. До сплати: ${a+100}`)
    }
}

class OwnDeliveryService extends Strategy{
    calculate(a){
       console.log(`Внутрішня служба доставки. До сплати: ${a+40}`)
    }
}

class DeliveryService{
    myStrategy = ""

    setStrategy(strategy){
        this.myStrategy = strategy
    }

    calculate_delivery(uan){
        this.myStrategy.calculate(uan)
    }
}

let deliveryService = new DeliveryService()

deliveryService.setStrategy(new SelfPickUp());
deliveryService.calculate_delivery(100);

deliveryService.setStrategy(new ExternalDeliveryService());
deliveryService.calculate_delivery(100);

deliveryService.setStrategy(new OwnDeliveryService());
deliveryService.calculate_delivery(100);