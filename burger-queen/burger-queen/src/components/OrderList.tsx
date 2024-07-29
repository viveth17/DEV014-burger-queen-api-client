import React from 'react';
import { List, ListItem, ListItemText, IconButton, Typography, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import AddIcon from '@mui/icons-material/Add';
import { OrderListProps } from '../types/types';
import styles from '../styles/OrderList.module.css';

const OrderList: React.FC<OrderListProps> = ({ orders, onRemove, onAddQuantity }) => {
    const calculateTotal = () => {
        return orders.reduce((total, order) => total + (order.product.price * order.qty), 0).toFixed(2);
    };
    return (
        <div className={styles.containerList}>
            <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', mt: 4 }}>
                <Typography variant="h6" gutterBottom className={styles.titleArt}>Productos seleccionados: </Typography>
                <List>
                    {orders.map(order => (
                        <ListItem key={order.product.id}>
                            <ListItemText
                                primary={order.product.name}
                                className={styles.nameProduct}
                                secondary={
                                    <>
                                        <Typography variant="body2" component="span" className={styles.titleCant}>
                                            Cantidad: {order.qty}
                                        </Typography>
                                        <Typography variant="body2" component="span" className={styles.titlePrice} sx={{ marginLeft: 2 }}>
                                            Precio: ${order.product.price * order.qty}
                                        </Typography>
                                    </>
                                }
                            />
                            <IconButton edge="end" aria-label="add" onClick={() => onAddQuantity(order.product.id)}>
                                <AddIcon style={{ color: "peachpuff" }} />
                            </IconButton>
                            <IconButton edge="end" aria-label="delete" onClick={() => onRemove(order.product.id)}>
                                <FontAwesomeIcon icon={faTrash} style={{ color: "peachpuff" }} />
                            </IconButton>
                        </ListItem>
                    ))}
                </List>
                <Typography variant="h6" className={styles.totalPrice} sx={{ textAlign: 'right', mt: 2 }}>
                    Total: ${calculateTotal()}
                </Typography>
            </Box>
        </div>
    );
};

export default OrderList;
