GRPC:  {
    "status": {
        "OK": 0,
        "CANCELLED": 1,
        "UNKNOWN": 2,
        "INVALID_ARGUMENT": 3,
        "DEADLINE_EXCEEDED": 4,
        "NOT_FOUND": 5,
        "ALREADY_EXISTS": 6,
        "PERMISSION_DENIED": 7,
        "UNAUTHENTICATED": 16,
        "RESOURCE_EXHAUSTED": 8,
        "FAILED_PRECONDITION": 9,
        "ABORTED": 10,
        "OUT_OF_RANGE": 11,
        "UNIMPLEMENTED": 12,
        "INTERNAL": 13,
        "UNAVAILABLE": 14,
        "DATA_LOSS": 15
    },
    "callError": {
        "OK": 0,
        "ERROR": 1,
        "NOT_ON_SERVER": 2,
        "NOT_ON_CLIENT": 3,
        "ALREADY_INVOKED": 5,
        "NOT_INVOKED": 6,
        "ALREADY_FINISHED": 7,
        "TOO_MANY_OPERATIONS": 8,
        "INVALID_FLAGS": 9
    },
    "opType": {
        "SEND_INITIAL_METADATA": 0,
        "SEND_MESSAGE": 1,
        "SEND_CLOSE_FROM_CLIENT": 2,
        "SEND_STATUS_FROM_SERVER": 3,
        "RECV_INITIAL_METADATA": 4,
        "RECV_MESSAGE": 5,
        "RECV_STATUS_ON_CLIENT": 6,
        "RECV_CLOSE_ON_SERVER": 7
    },
    "propagate": {
        "DEADLINE": 1,
        "CENSUS_STATS_CONTEXT": 2,
        "CENSUS_TRACING_CONTEXT": 4,
        "CANCELLATION": 8,
        "DEFAULTS": 65535
    },
    "connectivityState": {
        "IDLE": 0,
        "CONNECTING": 1,
        "READY": 2,
        "TRANSIENT_FAILURE": 3,
        "FATAL_FAILURE": 4
    },
    "writeFlags": {
        "BUFFER_HINT": 1,
        "NO_COMPRESS": 2
    },
    "logVerbosity": {
        "DEBUG": 0,
        "INFO": 1,
        "ERROR": 2
    }
}