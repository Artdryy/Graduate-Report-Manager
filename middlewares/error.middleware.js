export function handleNotFound(request, reply) {
  const message = 'Route not found';
  request.log?.warn?.(message);
  reply.status(404).send({ status: false, message, data: null });
}


export function handleError(error, request, reply) {
  const statusCode = error?.statusCode || 400;
  const message = error?.message || 'Failed request';
  request.log?.error?.(error);
  reply.status(statusCode).send({ status: false, message, data: null });
}


export function handleSuccess(request, reply, data = null, message = 'Success') {
  request.log?.info?.(message);
  reply.status(200).send({ status: true, message, data });
}