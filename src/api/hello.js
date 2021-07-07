export default function hello(req, res) {
  res.status(200).json({
    item: "Skateboard",
    projectedDelivery: 2,
    projectedCost: 10,
  })
}
